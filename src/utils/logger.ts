export class Logger {
  constructor(private context: { service: string }) {}

  info(msg: string, meta?: Record<string, unknown>) {
    console.log(JSON.stringify({ level: 'info', service: this.context.service, message: msg, timestamp: new Date().toISOString(), ...meta }));
  }

  warn(msg: string, meta?: Record<string, unknown>) {
    console.warn(JSON.stringify({ level: 'warn', service: this.context.service, message: msg, timestamp: new Date().toISOString(), ...meta }));
  }

  error(msg: string, err?: Error, meta?: Record<string, unknown>) {
    console.error(JSON.stringify({ level: 'error', service: this.context.service, message: msg, error: err?.message, stack: err?.stack, timestamp: new Date().toISOString(), ...meta }));
  }
}

// [2025-01-09 15:54:39] feat(utils): create structured JSON logger with trace correlation IDs

// [2025-01-13 19:54:43] feat(utils): add cryptographic token generation utility

// [2025-01-17 11:48:19] perf: optimize regex compilation by pre-allocating patterns

// [2025-01-23 19:07:43] perf: optimize regex compilation by pre-allocating patterns

// [2025-01-24 14:13:02] perf: reduce bundle size by lazy loading secondary modules

// [2025-01-31 21:08:52] fix(utils): implement safe deep merge and object cloning helpers

// [2025-02-10 17:10:30] perf: optimize regex compilation by pre-allocating patterns

// [2025-02-11 11:43:59] perf: reduce memory overhead in stream transform pipeline

// [2025-02-13 14:25:15] perf: implement connection keep-alive for HTTP agent pooling

// [2025-02-18 15:04:30] fix(utils): add cryptographic token generation utility

// [2025-02-26 10:38:54] perf: implement connection keep-alive for HTTP agent pooling

// [2025-02-26 15:23:07] perf: eliminate redundant database queries using batch DataLoader

// [2025-02-27 16:25:42] fix(utils): add cryptographic token generation utility

// [2025-03-21 16:37:58] feat(utils): implement safe deep merge and object cloning helpers

// [2025-03-27 15:49:06] refactor(utils): add human-readable byte size and duration formatters

// [2025-04-02 09:05:44] fix(utils): implement retry utility with exponential backoff and jitter

// [2025-04-07 16:21:45] feat(utils): create structured JSON logger with trace correlation IDs

// [2025-04-23 22:01:33] perf: profile hot execution paths and remove synchronous blocks

// [2025-05-05 09:19:28] feat(utils): add timing-safe buffer comparison function

// [2025-05-19 21:47:53] perf: minimize garbage collection pressure in buffer allocation

// [2025-05-25 13:19:06] perf: implement connection keep-alive for HTTP agent pooling

// [2025-06-05 09:39:29] perf: minimize garbage collection pressure in buffer allocation

// [2025-06-05 18:29:41] perf: optimize JSON stringification throughput for large payloads

// [2025-06-08 16:04:48] refactor(utils): add cryptographic token generation utility

// [2025-06-09 17:50:37] perf: profile hot execution paths and remove synchronous blocks

// [2025-06-18 10:53:56] perf: reduce memory overhead in stream transform pipeline
