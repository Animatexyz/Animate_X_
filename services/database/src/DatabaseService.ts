import { Pool, PoolConfig } from 'pg';
import { DatabaseConfig } from './types';
import { Logger } from '../utils/logger';

export class DatabaseService {
    private pool: Pool;
    private logger: Logger;

    constructor(config: DatabaseConfig) {
        this.pool = new Pool(this.createPoolConfig(config));
        this.logger = new Logger('DatabaseService');

        this.setupErrorHandlers();
    }

    private createPoolConfig(config: DatabaseConfig): PoolConfig {
        return {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
            max: config.poolSize || 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        };
    }

    private setupErrorHandlers(): void {
        this.pool.on('error', (err) => {
            this.logger.error('Unexpected database error:', err);
        });
    }

    async query<T>(sql: string, params?: any[]): Promise<T[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query(sql, params);
            return result.rows;
        } catch (error) {
            this.logger.error('Query error:', error);
            throw error;
        } finally {
            client.release();
        }
    }

    async transaction<T>(callback: (client: any) => Promise<T>): Promise<T> {
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN');
            const result = await callback(client);
            await client.query('COMMIT');
            return result;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }
} 