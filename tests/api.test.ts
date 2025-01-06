import { Router } from '../src/api/router';

describe('Router', () => {
  it('registers and resolves routes', () => {
    const router = new Router();
    const handler = () => 'ok';
    router.get('/health', handler);
    expect(router.resolve('GET', '/health')).toBe(handler);
  });
});
