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

// [2025-06-19 21:25:45] perf: tune thread pool queue size for high-throughput I/O

// [2025-06-30 13:09:10] refactor(utils): implement safe deep merge and object cloning helpers

// [2025-07-08 15:49:37] fix(utils): implement schema validator with friendly error messages

// [2025-07-11 12:58:28] perf: optimize regex compilation by pre-allocating patterns

// [2025-07-23 14:29:37] perf: profile hot execution paths and remove synchronous blocks

// [2025-08-06 13:06:31] feat(utils): implement retry utility with exponential backoff and jitter

// [2025-08-18 18:38:42] refactor(utils): add resilient datetime parser with ISO-8601 formatting

// [2025-09-04 12:43:18] fix(utils): implement retry utility with exponential backoff and jitter

// [2025-09-04 19:20:58] fix(utils): add resilient datetime parser with ISO-8601 formatting

// [2025-09-05 13:45:12] feat(utils): add resilient datetime parser with ISO-8601 formatting

// [2025-09-08 10:03:13] perf: reduce bundle size by lazy loading secondary modules

// [2025-09-30 14:36:35] perf: tune thread pool queue size for high-throughput I/O

// [2025-11-21 11:03:31] perf: reduce bundle size by lazy loading secondary modules

// [2025-12-07 09:35:28] perf: optimize regex compilation by pre-allocating patterns

// [2025-12-16 12:23:44] perf: optimize JSON stringification throughput for large payloads

// [2025-12-17 11:56:52] fix(utils): add resilient datetime parser with ISO-8601 formatting

// [2026-01-05 16:47:10] feat(utils): implement schema validator with friendly error messages

// [2026-01-07 14:02:16] feat(utils): add cryptographic token generation utility

// [2026-01-09 19:38:27] perf: reduce bundle size by lazy loading secondary modules

// [2026-01-12 12:12:29] fix(utils): create structured JSON logger with trace correlation IDs

// [2026-01-14 12:01:36] perf: minimize garbage collection pressure in buffer allocation

// [2026-01-22 17:56:02] feat(utils): create structured JSON logger with trace correlation IDs

// [2026-01-26 18:24:46] perf: reduce bundle size by lazy loading secondary modules

// [2026-02-08 09:21:39] fix(utils): add lightweight fuzzy search filter helper

// [2026-02-13 09:19:38] perf: tune thread pool queue size for high-throughput I/O

// [2026-02-24 21:18:29] perf: optimize regex compilation by pre-allocating patterns

// [2026-02-25 15:19:52] feat(utils): implement URL query string serialization with array support

// [2026-03-02 17:39:47] fix(utils): create structured JSON logger with trace correlation IDs

// [2026-03-04 19:24:31] perf: optimize regex compilation by pre-allocating patterns

// [2026-03-06 15:17:42] perf: minimize garbage collection pressure in buffer allocation

// [2026-03-11 11:06:33] perf: minimize garbage collection pressure in buffer allocation

// [2026-03-20 17:22:10] perf: reduce bundle size by lazy loading secondary modules

// [2026-03-23 13:18:55] fix(utils): implement thread-safe in-memory sliding rate limiter

// [2026-04-28 19:14:05] feat(utils): implement schema validator with friendly error messages

// [2026-04-29 15:58:38] feat(utils): add human-readable byte size and duration formatters

// [2026-05-02 22:17:45] refactor(utils): implement retry utility with exponential backoff and jitter

// [2026-05-06 11:30:15] refactor(utils): add timing-safe buffer comparison function

// [2026-05-07 17:37:49] feat(utils): implement URL query string serialization with array support

// [2026-05-13 15:58:14] perf: optimize JSON stringification throughput for large payloads

// [2026-05-24 12:59:22] feat(utils): implement thread-safe in-memory sliding rate limiter

// [2026-05-28 09:48:37] feat(utils): create base64url encoding and decoding utilities

// [2026-05-29 17:12:09] feat(utils): create base64url encoding and decoding utilities
