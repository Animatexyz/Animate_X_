import { SystemMonitor } from '../../../../services/monitoring/Monitor';
import { MetricsCollector, AlertSystem } from '../../../../services/monitoring/types';

jest.mock('../../../../services/monitoring/types');

describe('SystemMonitor', () => {
  let monitor: SystemMonitor;
  let mockMetricsCollector: jest.Mocked<MetricsCollector>;
  let mockAlertSystem: jest.Mocked<AlertSystem>;

  beforeEach(() => {
    mockMetricsCollector = new MetricsCollector() as jest.Mocked<MetricsCollector>;
    mockAlertSystem = new AlertSystem() as jest.Mocked<AlertSystem>;
    monitor = new SystemMonitor();
  });

  test('should collect and analyze metrics', async () => {
    const mockMetrics = {
      cpuUsage: 85,
      memoryUsage: 70,
      requestLatency: 150
    };

    mockMetricsCollector.collect.mockResolvedValue(mockMetrics);
    await monitor.collectMetrics();

    expect(mockMetricsCollector.collect).toHaveBeenCalled();
    expect(mockAlertSystem.sendAlert).toHaveBeenCalledWith('High CPU Usage');
  });
}); 