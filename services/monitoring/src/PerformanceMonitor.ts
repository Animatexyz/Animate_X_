import { Metrics } from './Metrics';
import { AlertManager } from './AlertManager';
import { PerformanceConfig } from './types';
import { Logger } from '../utils/logger';

export class PerformanceMonitor {
    private metrics: Metrics;
    private alertManager: AlertManager;
    private logger: Logger;
    private thresholds: Record<string, number>;

    constructor(config: PerformanceConfig) {
        this.metrics = new Metrics(config.metrics);
        this.alertManager = new AlertManager(config.alerts);
        this.logger = new Logger('PerformanceMonitor');
        this.thresholds = config.thresholds;

        this.startMonitoring();
    }

    private async startMonitoring(): Promise<void> {
        setInterval(async () => {
            try {
                const metrics = await this.collectMetrics();
                await this.analyzeMetrics(metrics);
            } catch (error) {
                this.logger.error('Monitoring error:', error);
            }
        }, 60000); // Monitor every minute
    }

    private async collectMetrics(): Promise<any> {
        return {
            cpu: await this.metrics.getCPUUsage(),
            memory: await this.metrics.getMemoryUsage(),
            latency: await this.metrics.getAPILatency(),
            errorRate: await this.metrics.getErrorRate()
        };
    }

    private async analyzeMetrics(metrics: any): Promise<void> {
        // Check CPU usage
        if (metrics.cpu > this.thresholds.cpu) {
            await this.alertManager.sendAlert('HIGH_CPU_USAGE', metrics.cpu);
        }

        // Check memory usage
        if (metrics.memory > this.thresholds.memory) {
            await this.alertManager.sendAlert('HIGH_MEMORY_USAGE', metrics.memory);
        }

        // Check API latency
        if (metrics.latency > this.thresholds.latency) {
            await this.alertManager.sendAlert('HIGH_LATENCY', metrics.latency);
        }

        // Check error rate
        if (metrics.errorRate > this.thresholds.errorRate) {
            await this.alertManager.sendAlert('HIGH_ERROR_RATE', metrics.errorRate);
        }
    }
} 