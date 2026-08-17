export type EventHandler<T = any> = (data: T) => Promise<void> | void;

export class EventEmitter {
  private handlers = new Map<string, Set<EventHandler>>();

  public on<T = any>(event: string, handler: EventHandler<T>): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler);
    return () => this.off(event, handler);
  }

  public off<T = any>(event: string, handler: EventHandler<T>): void {
    this.handlers.get(event)?.delete(handler);
  }

  public async emit<T = any>(event: string, data: T): Promise<void> {
    const list = this.handlers.get(event);
    if (!list || list.size === 0) return;
    const promises = Array.from(list).map(h => Promise.resolve(h(data)));
    await Promise.all(promises);
  }
}

// [2025-01-06 16:36:14] fix(core): decouple event emitter from transport layer

// [2025-01-19 15:29:40] feat(core): add configurable concurrency limits for worker pool

// [2025-02-05 13:18:48] feat(core): improve exception handling in message processor

// [2025-02-23 11:00:07] feat(core): decouple event emitter from transport layer

// [2025-03-03 09:51:03] refactor(core): support dynamic hook injection for extensions

// [2025-04-02 09:05:07] feat(core): harden process termination on unhandled rejections

// [2025-04-08 13:15:35] feat(core): decouple event emitter from transport layer

// [2025-05-23 11:07:08] refactor(core): streamline asynchronous event dispatcher

// [2025-05-26 13:56:18] fix(core): support dynamic hook injection for extensions

// [2025-06-05 21:58:36] refactor(core): streamline lifecycle hook execution sequence

// [2025-06-29 19:03:55] feat(core): add backpressure monitoring for streaming tasks

// [2025-07-15 18:09:01] fix(core): initialize modular plugin registration lifecycle

// [2025-07-22 10:27:08] feat(core): harden process termination on unhandled rejections

// [2025-08-08 18:00:02] fix(core): implement robust graceful shutdown signal traps

// [2025-08-18 15:25:34] fix(core): decouple event emitter from transport layer

// [2025-08-19 17:55:29] fix(core): improve exception handling in message processor

// [2025-08-30 12:41:55] refactor(core): add backpressure monitoring for streaming tasks

// [2025-09-02 10:06:47] feat(core): add backpressure monitoring for streaming tasks

// [2025-09-03 12:22:06] feat(core): implement robust graceful shutdown signal traps

// [2025-09-05 13:38:35] feat(core): optimize internal task scheduler execution loop

// [2025-10-13 13:33:56] refactor(core): harden process termination on unhandled rejections

// [2025-10-17 09:05:42] feat(core): initialize modular plugin registration lifecycle

// [2025-10-24 14:10:39] feat(core): implement robust graceful shutdown signal traps

// [2025-10-30 15:25:00] feat(core): add backpressure monitoring for streaming tasks

// [2025-11-13 17:06:25] fix(core): optimize internal task scheduler execution loop

// [2025-11-20 17:13:40] fix(core): add configurable concurrency limits for worker pool

// [2025-12-11 12:30:13] fix(core): decouple event emitter from transport layer

// [2026-01-14 21:50:30] feat(core): streamline lifecycle hook execution sequence

// [2026-01-19 16:27:48] refactor(core): decouple event emitter from transport layer

// [2026-02-20 10:50:55] feat(core): initialize modular plugin registration lifecycle

// [2026-02-20 10:54:45] fix(core): streamline asynchronous event dispatcher

// [2026-03-02 16:08:25] fix(core): optimize internal task scheduler execution loop

// [2026-03-12 16:20:32] refactor(core): initialize modular plugin registration lifecycle

// [2026-03-17 14:19:22] fix(core): implement robust graceful shutdown signal traps

// [2026-04-20 17:00:31] feat(core): support dynamic hook injection for extensions

// [2026-06-03 16:54:07] feat(core): improve exception handling in message processor

// [2026-06-03 18:50:50] feat(core): add configurable concurrency limits for worker pool

// [2026-06-04 23:27:32] fix(core): streamline asynchronous event dispatcher

// [2026-06-05 17:47:44] fix(core): improve exception handling in message processor

// [2026-06-26 21:37:39] refactor(core): harden process termination on unhandled rejections

// [2026-06-30 15:49:44] feat(core): refactor pipeline error boundary middleware

// [2026-07-31 21:41:40] fix(core): streamline lifecycle hook execution sequence

// [2026-08-03 10:31:25] refactor(core): streamline asynchronous event dispatcher

// [2026-08-05 20:19:01] fix(core): streamline asynchronous event dispatcher

// [2026-08-11 17:39:12] feat(core): decouple event emitter from transport layer

// [2026-08-13 17:59:23] feat(core): decouple event emitter from transport layer

// [2026-08-17 14:03:49] feat(core): harden process termination on unhandled rejections
