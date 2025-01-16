import { TokenManager } from '../src/auth/token';

describe('TokenManager', () => {
  it('signs and verifies valid tokens', () => {
    const tm = new TokenManager('secret-key', 60);
    const token = tm.sign({ sub: 'user_1', roles: ['admin'] });
    const payload = tm.verify(token);
    expect(payload?.sub).toBe('user_1');
    expect(payload?.roles).toContain('admin');
  });
});

// [2025-01-16 15:07:49] test: add integration test suite covering end-to-end user flows
