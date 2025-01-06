import { randomBytes, createHash } from 'node:crypto';

export function generateSecureToken(bytes = 32): string {
  return randomBytes(bytes).toString('hex');
}

export function hashString(input: string, algorithm = 'sha256'): string {
  return createHash(algorithm).update(input).digest('hex');
}
