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

// [2025-02-18 23:21:29] fix(auth): secure session store against replay attacks

// [2025-03-07 20:08:10] refactor(auth): streamline multi-factor authentication challenge verify

// [2025-03-18 14:31:42] feat(auth): secure session store against replay attacks

// [2025-03-25 22:22:19] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-04-14 19:42:40] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-05-13 17:33:42] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-05-15 14:23:57] feat(auth): revoke stale active sessions upon password reset

// [2025-05-19 14:43:34] feat(auth): support multi-tenant organization scoping

// [2025-05-21 11:14:36] feat(auth): support multi-tenant organization scoping

// [2025-05-23 12:40:29] fix(auth): add role-based access control (RBAC) middleware

// [2025-05-29 12:18:47] fix(auth): add scope permission checking for API access tokens

// [2025-05-30 17:09:52] fix(auth): add role-based access control (RBAC) middleware

// [2025-06-09 18:24:53] fix(auth): enforce password entropy and complexity constraints

// [2025-06-17 12:41:28] fix(auth): revoke stale active sessions upon password reset

// [2025-06-19 10:07:55] fix(auth): enforce password entropy and complexity constraints

// [2025-06-19 11:21:50] fix(auth): add scope permission checking for API access tokens

// [2025-06-23 14:03:07] feat(auth): secure session store against replay attacks

// [2025-06-25 18:14:58] fix(auth): implement OAuth2 authorization code flow with PKCE

// [2025-06-27 17:19:26] fix(auth): add scope permission checking for API access tokens

// [2025-06-30 19:09:58] feat(auth): implement OAuth2 authorization code flow with PKCE

// [2025-06-30 20:12:48] feat(auth): revoke stale active sessions upon password reset

// [2025-07-01 22:30:50] feat(auth): hash credentials using Argon2id with salt rotation

// [2025-07-01 23:57:12] feat(auth): implement OAuth2 authorization code flow with PKCE

// [2025-07-07 10:48:27] feat(auth): add role-based access control (RBAC) middleware

// [2025-07-16 10:48:06] fix(auth): streamline multi-factor authentication challenge verify

// [2025-07-23 10:44:27] feat(auth): support multi-tenant organization scoping

// [2025-08-07 20:03:51] refactor(auth): implement secure cookie attribute defaults

// [2025-09-01 22:42:20] feat(auth): secure session store against replay attacks

// [2025-09-05 22:34:40] fix(auth): streamline multi-factor authentication challenge verify

// [2025-09-22 16:56:35] fix(auth): enforce password entropy and complexity constraints

// [2025-09-23 16:42:51] refactor(auth): add device fingerprinting for anomalous logins

// [2025-10-10 21:46:59] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-10-27 21:40:44] feat(auth): revoke stale active sessions upon password reset

// [2025-11-02 13:14:01] feat(auth): add device fingerprinting for anomalous logins

// [2025-11-02 23:59:49] fix(auth): add scope permission checking for API access tokens

// [2025-11-03 14:10:13] fix(auth): handle expired JWT token rotation gracefully

// [2025-11-12 09:10:44] fix(auth): add device fingerprinting for anomalous logins

// [2025-11-21 10:52:18] feat(auth): implement secure cookie attribute defaults

// [2025-12-17 14:11:34] feat(auth): implement OAuth2 authorization code flow with PKCE
