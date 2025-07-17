export class LRUCache<K, V> {
  private cache = new Map<K, V>();

  constructor(private readonly capacity: number) {}

  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    const val = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  size(): number {
    return this.cache.size;
  }
}

// [2025-01-07 16:22:33] feat(cache): support stale-while-revalidate caching header policy

// [2025-01-12 13:13:13] feat(cache): support stale-while-revalidate caching header policy

// [2025-01-17 11:38:17] feat(cache): add circuit breaker to Redis client on timeout spikes

// [2025-01-22 15:19:42] feat(cache): optimize key prefix namespacing and serialization overhead

// [2025-02-05 10:20:11] feat(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-02-07 16:28:18] feat(cache): add circuit breaker to Redis client on timeout spikes

// [2025-02-12 09:07:56] fix(cache): resolve race condition in distributed cache eviction

// [2025-02-13 17:12:23] fix(cache): benchmark serialization protocols for cached entities

// [2025-03-06 13:16:53] fix(cache): add sliding window TTL calculation for hot keys

// [2025-03-13 14:02:00] feat(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-04-03 23:23:35] feat(cache): implement local L1 LRU cache with memory size ceiling

// [2025-04-06 12:05:42] fix(cache): benchmark serialization protocols for cached entities

// [2025-04-22 14:35:27] fix(cache): implement dual-layer memory and Redis cache provider

// [2025-04-28 20:16:23] refactor(cache): implement tag-based cache invalidation hooks

// [2025-05-17 18:38:47] feat(cache): support stale-while-revalidate caching header policy

// [2025-05-23 13:18:54] feat(cache): implement dual-layer memory and Redis cache provider

// [2025-05-26 22:37:50] fix(cache): add sliding window TTL calculation for hot keys

// [2025-06-05 12:41:15] feat(cache): implement tag-based cache invalidation hooks

// [2025-07-02 17:41:41] refactor(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-07-04 11:31:25] fix(cache): optimize key prefix namespacing and serialization overhead

// [2025-07-07 10:28:26] feat(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-07-17 17:59:54] fix(cache): add cache stampede prevention via probabilistic early recomputation
