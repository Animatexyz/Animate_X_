import { ChainConfig, Transaction } from './types';

export class MultiChainService {
  private chains: Map<string, ChainConfig>;
  
  constructor() {
    this.chains = new Map();
  }

  async addChain(chainId: string, config: ChainConfig): Promise<void> {
    await this.validateChainConfig(config);
    this.chains.set(chainId, config);
  }

  async executeTransaction(chainId: string, tx: Transaction): Promise<string> {
    const chain = this.chains.get(chainId);
    if (!chain) {
      throw new Error(`Chain ${chainId} not supported`);
    }

    return await chain.provider.sendTransaction(tx);
  }

  async bridgeAssets(
    fromChain: string,
    toChain
} 