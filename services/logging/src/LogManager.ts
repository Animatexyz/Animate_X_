import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';
import { LogConfig } from './types';

export class LogManager {
    private logger: winston.Logger;
    private config: LogConfig;

    constructor(config: LogConfig) {
        this.config = config;
        this.logger = this.createLogger();
    }

    private createLogger(): winston.Logger {
        return winston.createLogger({
            level: this.config.level || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console({
                    format: winston.format.simple()
                }),
                new winston.transports.File({
                    filename: 'error.log',
                    level: 'error'
                }),
                new winston.transports.File({
                    filename: 'combined.log'
                }),
                new ElasticsearchTransport({
                    level: 'info',
                    clientOpts: this.config.elasticsearch
                })
            ]
        });
    }

    info(message: string, meta?: any): void {
        this.logger.info(message, meta);
    }

    error(message: string, error?: Error): void {
        this.logger.error(message, {
            error: error?.message,
            stack: error?.stack
        });
    }

    warn(message: string, meta?: any): void {
        this.logger.warn(message, meta);
    }

    debug(message: string, meta?: any): void {
        this.logger.debug(message, meta);
    }
} 