import { MetricsCollector, AlertSystem } from './types';

export class SystemMonitor {
  private metricsCollector: MetricsCollector;
  private alertSystem: AlertSystem;
  
  constructor() {
    this.metricsCollector = new MetricsCollector();
    this.alertSystem = new AlertSystem();
  }

  async collectMetrics(): Promise<void> {
    const metrics = await this.metricsCollector.collect();
    await this.analyzeMetrics(metrics);
  }

  private async analyzeMetrics(metrics: any): Promise<void> {
    if (metrics.cpuUsage > 80) {
      await this.alertSystem.sendAlert('High CPU Usage');
    }
    // More metric analysis...
  }
} 