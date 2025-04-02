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
