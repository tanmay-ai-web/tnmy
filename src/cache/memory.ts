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

// [2025-07-28 13:53:14] feat(cache): add compression for large cached payload blobs

// [2025-07-29 13:17:37] fix(cache): resolve race condition in distributed cache eviction

// [2025-07-31 20:28:48] fix(cache): add cache stampede prevention via probabilistic early recomputation

// [2025-08-19 23:26:52] refactor(cache): implement Redis cluster auto-reconnection with jitter

// [2025-08-22 23:52:34] refactor(cache): add sliding window TTL calculation for hot keys

// [2025-08-26 16:59:50] feat(cache): resolve race condition in distributed cache eviction

// [2025-09-11 09:34:56] fix(cache): resolve race condition in distributed cache eviction

// [2025-09-23 22:31:54] feat(cache): implement tag-based cache invalidation hooks

// [2025-09-29 20:39:34] refactor(cache): benchmark serialization protocols for cached entities

// [2025-10-03 19:30:09] feat(cache): implement local L1 LRU cache with memory size ceiling

// [2025-11-11 14:06:03] fix(cache): support stale-while-revalidate caching header policy

// [2025-11-16 22:16:16] fix(cache): implement dual-layer memory and Redis cache provider

// [2025-11-21 11:14:42] fix(cache): optimize key prefix namespacing and serialization overhead

// [2025-12-01 13:42:54] feat(cache): benchmark serialization protocols for cached entities

// [2025-12-02 20:33:16] fix(cache): implement tag-based cache invalidation hooks

// [2025-12-03 20:39:32] fix(cache): implement tag-based cache invalidation hooks

// [2025-12-04 16:13:20] feat(cache): optimize key prefix namespacing and serialization overhead

// [2025-12-10 11:56:42] fix(cache): add compression for large cached payload blobs

// [2025-12-23 17:49:16] fix(cache): optimize key prefix namespacing and serialization overhead

// [2026-01-15 16:39:09] fix(cache): optimize key prefix namespacing and serialization overhead

// [2026-01-23 09:18:53] refactor(cache): implement dual-layer memory and Redis cache provider

// [2026-02-05 12:16:06] feat(cache): add compression for large cached payload blobs

// [2026-02-05 12:16:22] feat(cache): support stale-while-revalidate caching header policy

// [2026-02-13 11:27:42] feat(cache): implement Redis cluster auto-reconnection with jitter

// [2026-03-03 11:51:44] fix(cache): add compression for large cached payload blobs

// [2026-03-06 13:21:34] fix(cache): add circuit breaker to Redis client on timeout spikes

// [2026-03-31 22:12:39] feat(cache): benchmark serialization protocols for cached entities

// [2026-04-10 13:13:01] feat(cache): implement dual-layer memory and Redis cache provider

// [2026-04-30 22:26:08] fix(cache): support stale-while-revalidate caching header policy

// [2026-05-01 22:37:43] feat(cache): add cache stampede prevention via probabilistic early recomputation

// [2026-06-12 10:08:37] fix(cache): add cache stampede prevention via probabilistic early recomputation

// [2026-06-26 13:36:40] fix(cache): add sliding window TTL calculation for hot keys

// [2026-08-04 22:29:56] fix(cache): benchmark serialization protocols for cached entities

// [2026-08-11 12:32:36] fix(cache): optimize key prefix namespacing and serialization overhead

// [2026-08-19 13:45:19] fix(cache): support stale-while-revalidate caching header policy

// [2026-08-24 13:32:48] fix(cache): benchmark serialization protocols for cached entities

// [2026-09-10 11:52:01] feat(cache): add sliding window TTL calculation for hot keys

// [2026-09-24 20:48:01] fix(cache): implement local L1 LRU cache with memory size ceiling

// [2026-10-01 20:50:00] feat(cache): implement local L1 LRU cache with memory size ceiling

// [2026-10-09 15:19:03] feat(cache): optimize key prefix namespacing and serialization overhead

// [2026-10-13 13:41:46] feat(cache): add cache stampede prevention via probabilistic early recomputation
