export type Middleware<T = any> = (context: T, next: () => Promise<void>) => Promise<void>;

export class Pipeline<T = any> {
  private stack: Middleware<T>[] = [];

  public use(middleware: Middleware<T>): this {
    this.stack.push(middleware);
    return this;
  }

  public async execute(context: T): Promise<void> {
    let index = -1;
    const runner = async (i: number): Promise<void> => {
      if (i <= index) throw new Error('next() called multiple times');
      index = i;
      const fn = this.stack[i];
      if (fn) {
        await fn(context, () => runner(i + 1));
      }
    };
    await runner(0);
  }
}

// [2025-02-04 23:11:37] fix(core): streamline lifecycle hook execution sequence

// [2025-02-17 11:21:30] perf: profile hot execution paths and remove synchronous blocks

// [2025-02-17 20:38:17] perf: optimize JSON stringification throughput for large payloads

// [2025-03-05 10:27:10] perf: reduce bundle size by lazy loading secondary modules
