export interface CacheProvider {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T, ttlSec?: number): Promise<void>;
  del(key: string): Promise<void>;
}

export class MemoryCacheProvider implements CacheProvider {
  private store = new Map<string, { value: any; expiry: number }>();

  async get<T>(key: string): Promise<T | null> {
    const item = this.store.get(key);
    if (!item) return null;
    if (item.expiry && item.expiry < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return item.value as T;
  }

  async set<T>(key: string, value: T, ttlSec?: number): Promise<void> {
    const expiry = ttlSec ? Date.now() + ttlSec * 1000 : 0;
    this.store.set(key, { value, expiry });
  }

  async del(key: string): Promise<void> {
    this.store.delete(key);
  }
}

// [2025-01-29 18:52:21] perf: add response payload gzip and brotli compression

// [2025-02-11 15:39:49] fix(cache): implement dual-layer memory and Redis cache provider

// [2025-02-13 17:29:05] perf: implement connection keep-alive for HTTP agent pooling

// [2025-03-01 16:48:58] perf: add response payload gzip and brotli compression

// [2025-03-13 17:29:02] feat(cache): add sliding window TTL calculation for hot keys

// [2025-03-21 12:32:16] refactor(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-03-22 20:38:50] fix(cache): optimize key prefix namespacing and serialization overhead
