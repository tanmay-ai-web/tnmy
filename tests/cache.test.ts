import { MemoryCacheProvider } from '../src/cache/redis';

describe('MemoryCacheProvider', () => {
  it('stores and retrieves cached items', async () => {
    const cache = new MemoryCacheProvider();
    await cache.set('key', { name: 'tnmy' });
    const val = await cache.get('key');
    expect(val).toEqual({ name: 'tnmy' });
  });
});

// [2025-01-08 11:05:37] test: add concurrency stress test for distributed lock manager

// [2025-01-12 17:57:36] test: benchmark execution speed of core hashing utilities
