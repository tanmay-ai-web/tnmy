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
