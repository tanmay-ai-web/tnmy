export interface PoolConfig {
  maxConnections: number;
  idleTimeoutMs: number;
}

export class ConnectionPool {
  private activeCount = 0;

  constructor(private readonly config: PoolConfig) {}

  public async acquire(): Promise<{ id: number; release: () => void }> {
    if (this.activeCount >= this.config.maxConnections) {
      throw new Error('Connection pool exhausted');
    }
    this.activeCount++;
    const id = this.activeCount;
    return {
      id,
      release: () => {
        this.activeCount--;
      }
    };
  }

  public getActiveCount(): number {
    return this.activeCount;
  }
}
