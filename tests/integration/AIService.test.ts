import { ModelService } from '../../services/ai/core/ModelService';
import { TestUtils } from '../utils';

describe('AI Service Integration Tests', () => {
  let modelService: ModelService;

  beforeEach(async () => {
    modelService = await TestUtils.createTestModelService();
  });

  test('should generate animation from static image', async () => {
    const testImage = await TestUtils.loadTestImage('test.png');
    const result = await modelService.generateAnimation(testImage);
    
    expect(result.status).toBe('success');
    expect(result.animation).toBeDefined();
    expect(result.metadata.duration).toBeGreaterThan(0);
  });

  test('should handle invalid input gracefully', async () => {
    const invalidInput = Buffer.from('invalid data');
    await expect(modelService.generateAnimation(invalidInput))
      .rejects.toThrow('Invalid input format');
  });
}); 