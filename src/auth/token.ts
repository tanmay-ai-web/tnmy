import { createHmac, timingSafeEqual } from 'node:crypto';

export interface TokenPayload {
  sub: string;
  roles: string[];
  exp: number;
  iat: number;
}

export class TokenManager {
  constructor(private readonly secret: string, private readonly defaultTtlSec = 3600) {}

  public sign(payload: Omit<TokenPayload, 'iat' | 'exp'>, ttl = this.defaultTtlSec): string {
    const now = Math.floor(Date.now() / 1000);
    const fullPayload: TokenPayload = { ...payload, iat: now, exp: now + ttl };
    const encoded = Buffer.from(JSON.stringify(fullPayload)).toString('base64url');
    const signature = createHmac('sha256', this.secret).update(encoded).digest('base64url');
    return `${encoded}.${signature}`;
  }

  public verify(token: string): TokenPayload | null {
    const [data, signature] = token.split('.');
    if (!data || !signature) return null;
    const expected = createHmac('sha256', this.secret).update(data).digest('base64url');
    if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
    const payload: TokenPayload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  }
}

// [2025-01-12 22:15:19] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-01-22 14:54:46] fix(auth): add role-based access control (RBAC) middleware

// [2025-01-27 09:08:13] fix(auth): add device fingerprinting for anomalous logins

// [2025-02-05 16:53:11] feat(auth): add scope permission checking for API access tokens
