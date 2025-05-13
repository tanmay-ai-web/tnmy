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

// [2025-01-22 17:21:38] test: test token expiration and refresh race conditions

// [2025-01-28 17:09:43] test: introduce snapshot testing for API response payloads

// [2025-05-13 14:04:00] test: add coverage for malformed input boundary conditions
