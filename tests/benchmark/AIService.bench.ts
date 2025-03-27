import { ModelService } from '../../services/ai/core/ModelService';
import { performance } from 'perf_hooks';

export async function runBenchmarks() {
  const modelService = new ModelService({
    modelPath: './models/production',
    batchSize: 1
  });

  const testCases = [
    { size: 'small', imageSize: 256 },
    { size: 'medium', imageSize: 512 },
    { size: 'large', imageSize: 1024 }
  ];

  for (const testCase of testCases) {
    const testImage = await generateTestImage(testCase.imageSize);
    
    const startTime = performance.now();
    await modelService.generateAnimation(testImage);
    const endTime = performance.now();

    console.log(`${testCase.size} image processing time: ${endTime - startTime}ms`);
  }
} 