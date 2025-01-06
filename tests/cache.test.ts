import { MemoryCacheProvider } from '../src/cache/redis';

describe('MemoryCacheProvider', () => {
  it('stores and retrieves cached items', async () => {
    const cache = new MemoryCacheProvider();
    await cache.set('key', { name: 'tnmy' });
    const val = await cache.get('key');
    expect(val).toEqual({ name: 'tnmy' });
  });
});
