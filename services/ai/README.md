# AI Service

This directory contains the AI processing service for AnimateX.

## Structure

- `core/` - Core AI models and processing logic
- `api/` - API endpoints for AI service
- `utils/` - Utility functions and helpers

## Getting Started

```bash
cd services/ai
npm install
npm run dev
```

5. **添加示例配置文件**：

```json:services/ai/config/default.json
{
  "server": {
    "port": 8080,
    "host": "0.0.0.0"
  },
  "model": {
    "path": "./models/production",
    "batchSize": 1,
    "precision": "float32"
  },
  "storage": {
    "type": "local",
    "basePath": "./storage"
  },
  "logging": {
    "level": "info"
  }
}
```

这些添加会确保每个目录都有一些基本文件，使项目结构更加完整和专业。如果您有特定的目录需要更详细的文件结构，请告诉我。 