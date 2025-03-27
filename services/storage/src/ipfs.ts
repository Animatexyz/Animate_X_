import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { StorageConfig } from './types';

export class IPFSStorage {
    private client: IPFSHTTPClient;
    
    constructor(config: StorageConfig) {
        this.client = create({
            host: config.host,
            port: config.port,
            protocol: config.protocol
        });
    }

    async store(data: Buffer): Promise<string> {
        const result = await this.client.add(data);
        return result.path;
    }

    async retrieve(cid: string): Promise<Buffer> {
        const chunks = [];
        for await (const chunk of this.client.cat(cid)) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks);
    }
} 