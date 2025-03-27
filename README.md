# AnimateX

<div align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="200" height="200">
    <!-- Definitions for gradients and effects -->
    <defs>
      <!-- Logo Background Gradient -->
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0A1128" />
        <stop offset="100%" stop-color="#1C3879" />
      </linearGradient>
      
      <!-- Logo Gradient -->
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B6B" />
        <stop offset="100%" stop-color="#FF9E80" />
      </linearGradient>
      
      <!-- Accent Gradient for Animation Effect -->
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4ED8E0" />
        <stop offset="50%" stop-color="#A47CF4" />
        <stop offset="100%" stop-color="#FF6B6B" />
      </linearGradient>
      
      <!-- Glow Effect -->
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <!-- Background Circle -->
    <circle cx="200" cy="200" r="200" fill="url(#bgGradient)" />
    
    <!-- Animation Wave Effect -->
    <path d="M50,200 C100,150 150,250 200,180 S300,220 350,180" 
          stroke="url(#accentGradient)" stroke-width="4" fill="none" opacity="0.5" />
    
    <!-- Main Logo -->
    <g transform="translate(100, 200)" filter="url(#glow)">
      <!-- The letter "A" -->
      <path d="M0,0 L40,-80 L80,0 L60,0 L40,-40 L20,0 Z" fill="url(#logoGradient)" />
      
      <!-- The letter "X" -->
      <path d="M90,-80 L130,-40 L170,-80 L190,-80 L140,-20 L190,40 L170,40 L130,0 L90,40 L70,40 L120,-20 L70,-80 Z" fill="url(#logoGradient)" />
    </g>
    
    <!-- Digital Particles -->
    <g opacity="0.6">
      <circle cx="100" cy="100" r="2" fill="#FFFFFF" />
      <circle cx="300" cy="120" r="3" fill="#FFFFFF" />
      <circle cx="250" cy="80" r="2" fill="#FFFFFF" />
      <circle cx="150" cy="300" r="2" fill="#FFFFFF" />
      <circle cx="320" cy="280" r="3" fill="#FFFFFF" />
    </g>
  </svg>

  <p align="center">
    <a href="https://www.animatex.xyz/">Website</a> •
    <a href="https://x.com/Animate_X_">Twitter</a>
  </p>
</div>

A modern animation platform built with cutting-edge technologies.

## Features

- AI-powered animation generation
- Multi-chain support for NFT minting
- Distributed training system
- Gas-optimized smart contracts
- Modern web interface

## Project Structure

```
.
├── apps/
│   ├── api/          # Backend API service
│   └── web/          # Frontend application
├── contracts/        # Smart contracts
├── packages/
│   ├── contracts/    # Optimized contract implementations
│   ├── core/         # Core business logic
│   └── ui/           # Shared UI components
└── services/
    ├── ai/           # AI training and inference
    └── blockchain/   # Blockchain integration
```

## Technology Stack

- Frontend: React, TypeScript
- Backend: Node.js
- Smart Contracts: Solidity
- AI/ML: Python, TensorFlow
- Infrastructure: Docker, GitHub Actions

## Getting Started

### Prerequisites

- Node.js >= 16
- Python >= 3.8
- Docker
- Metamask or similar Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Animatexyz/Animate_X_.git
cd Animate_X_
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.development .env
```

4. Start the development server:
```bash
npm run dev
```

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run test`: Run tests
- `npm run lint`: Run linter

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/Animatexyz/Animate_X_](https://github.com/Animatexyz/Animate_X_) 