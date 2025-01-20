import { randomBytes, createHash } from 'node:crypto';

export function generateSecureToken(bytes = 32): string {
  return randomBytes(bytes).toString('hex');
}

export function hashString(input: string, algorithm = 'sha256'): string {
  return createHash(algorithm).update(input).digest('hex');
}

// [2025-01-20 21:22:26] feat(utils): implement safe deep merge and object cloning helpers
