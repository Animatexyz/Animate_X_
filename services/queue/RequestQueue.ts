import { Queue, QueueConfig } from './types';
import { RedisClient } from 'redis';

export class RequestQueueManager {
  private queue: Queue;
  private redis: RedisClient;

  constructor(config: QueueConfig) {
    this.redis = new RedisClient(config.redis);
    this.queue = this.initializeQueue();
  }

  async addRequest(request: any): Promise<string> {
    const requestId = this.generateRequestId();
    await this.queue.add({
      id: requestId,
      data: request,
      priority: request.priority || 'normal'
    });
    return requestId;
  }

  async processQueue(): Promise<void> {
    while (true) {
      const request = await this.queue.getNext();
      if (!request) continue;
      
      try {
        await this.processRequest(request);
      } catch (error) {
        await this.handleError(error, request);
      }
    }
  }
} 