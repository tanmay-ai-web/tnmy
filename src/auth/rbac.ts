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
