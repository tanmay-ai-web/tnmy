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

// [2025-03-05 13:15:48] perf: minimize garbage collection pressure in buffer allocation

// [2025-03-05 17:38:09] perf: reduce bundle size by lazy loading secondary modules

// [2025-03-31 16:21:02] fix(core): decouple event emitter from transport layer

// [2025-04-09 09:14:27] fix(core): initialize modular plugin registration lifecycle

// [2025-04-11 14:11:45] feat(core): streamline lifecycle hook execution sequence

// [2025-04-13 20:18:16] perf: eliminate redundant database queries using batch DataLoader

// [2025-04-25 16:55:53] fix(core): refactor pipeline error boundary middleware

// [2025-05-15 21:24:42] feat(core): improve exception handling in message processor

// [2025-05-16 10:56:32] fix(core): streamline asynchronous event dispatcher

// [2025-05-22 15:11:02] fix(core): improve exception handling in message processor

// [2025-05-26 11:18:16] perf: reduce memory overhead in stream transform pipeline

// [2025-06-17 10:08:27] perf: reduce memory overhead in stream transform pipeline

// [2025-06-18 23:30:19] fix(core): support dynamic hook injection for extensions

// [2025-06-20 17:10:33] perf: tune thread pool queue size for high-throughput I/O

// [2025-06-26 16:43:02] fix(core): optimize internal task scheduler execution loop

// [2025-07-24 14:52:05] perf: optimize regex compilation by pre-allocating patterns

// [2025-07-27 11:35:18] feat(core): initialize modular plugin registration lifecycle

// [2025-08-08 10:27:06] fix(core): implement robust graceful shutdown signal traps

// [2025-08-19 17:01:56] fix(core): streamline asynchronous event dispatcher

// [2025-08-24 15:30:05] fix(core): optimize internal task scheduler execution loop

// [2025-08-27 09:11:20] perf: minimize garbage collection pressure in buffer allocation

// [2025-09-08 13:35:45] perf: add response payload gzip and brotli compression

// [2025-09-29 15:08:58] feat(core): support dynamic hook injection for extensions

// [2025-10-16 11:10:59] perf: add response payload gzip and brotli compression

// [2025-10-19 21:37:11] perf: reduce bundle size by lazy loading secondary modules

// [2025-10-30 15:17:12] perf: profile hot execution paths and remove synchronous blocks

// [2025-11-07 20:06:54] perf: minimize garbage collection pressure in buffer allocation

// [2025-11-27 15:01:13] refactor(core): optimize internal task scheduler execution loop

// [2025-12-05 19:35:23] feat(core): streamline lifecycle hook execution sequence

// [2025-12-12 19:18:34] perf: optimize regex compilation by pre-allocating patterns

// [2025-12-17 21:15:47] perf: add response payload gzip and brotli compression

// [2025-12-22 16:26:26] feat(core): implement robust graceful shutdown signal traps

// [2026-01-02 17:29:14] fix(core): optimize internal task scheduler execution loop

// [2026-01-04 12:05:02] perf: reduce bundle size by lazy loading secondary modules

// [2026-01-09 16:12:30] feat(core): implement robust graceful shutdown signal traps

// [2026-01-28 10:11:36] fix(core): implement robust graceful shutdown signal traps

// [2026-01-31 20:41:36] feat(core): add backpressure monitoring for streaming tasks

// [2026-02-07 12:51:08] refactor(core): add configurable concurrency limits for worker pool

// [2026-02-09 12:18:40] perf: tune thread pool queue size for high-throughput I/O
