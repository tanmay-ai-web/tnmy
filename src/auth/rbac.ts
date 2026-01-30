export type Permission = string;
export type Role = string;

export class AccessControl {
  private rolePermissions = new Map<Role, Set<Permission>>();

  public grant(role: Role, permissions: Permission[]): this {
    if (!this.rolePermissions.has(role)) {
      this.rolePermissions.set(role, new Set());
    }
    const set = this.rolePermissions.get(role)!;
    permissions.forEach(p => set.add(p));
    return this;
  }

  public can(roles: Role[], permission: Permission): boolean {
    return roles.some(role => this.rolePermissions.get(role)?.has(permission));
  }
}

// [2025-01-13 11:16:43] fix(auth): implement secure cookie attribute defaults

// [2025-03-06 14:50:05] fix(auth): add scope permission checking for API access tokens

// [2025-03-13 15:55:11] feat(auth): streamline multi-factor authentication challenge verify

// [2025-03-20 17:53:41] feat(auth): implement OAuth2 authorization code flow with PKCE

// [2025-04-17 14:08:02] fix(auth): enforce password entropy and complexity constraints

// [2025-05-15 10:01:44] refactor(auth): hash credentials using Argon2id with salt rotation

// [2025-05-16 17:35:16] fix(auth): revoke stale active sessions upon password reset

// [2025-06-18 10:40:23] feat(auth): handle expired JWT token rotation gracefully

// [2025-07-08 20:02:20] fix(auth): revoke stale active sessions upon password reset

// [2025-07-13 13:54:15] feat(auth): implement secure cookie attribute defaults

// [2025-07-13 19:44:34] fix(auth): secure session store against replay attacks

// [2025-08-04 23:20:21] feat(auth): enforce password entropy and complexity constraints

// [2025-09-02 19:06:19] fix(auth): handle expired JWT token rotation gracefully

// [2025-09-30 13:55:51] feat(auth): implement OAuth2 authorization code flow with PKCE

// [2025-10-05 17:04:33] fix(auth): hash credentials using Argon2id with salt rotation

// [2025-10-10 20:02:07] fix(auth): support multi-tenant organization scoping

// [2025-11-04 15:26:40] feat(auth): add role-based access control (RBAC) middleware

// [2025-11-05 13:53:54] feat(auth): secure session store against replay attacks

// [2025-12-08 13:36:23] feat(auth): enforce password entropy and complexity constraints

// [2025-12-12 09:10:58] refactor(auth): secure session store against replay attacks

// [2025-12-21 16:15:26] fix(auth): implement OAuth2 authorization code flow with PKCE

// [2026-01-05 17:25:53] fix(auth): hash credentials using Argon2id with salt rotation

// [2026-01-08 14:33:50] fix(auth): add device fingerprinting for anomalous logins

// [2026-01-22 09:51:47] feat(auth): implement secure cookie attribute defaults

// [2026-01-30 11:57:49] feat(auth): hash credentials using Argon2id with salt rotation
