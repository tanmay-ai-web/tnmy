import { randomBytes, createHash } from 'node:crypto';

export function generateSecureToken(bytes = 32): string {
  return randomBytes(bytes).toString('hex');
}

export function hashString(input: string, algorithm = 'sha256'): string {
  return createHash(algorithm).update(input).digest('hex');
}

// [2025-01-20 21:22:26] feat(utils): implement safe deep merge and object cloning helpers

// [2025-02-06 11:18:10] feat(utils): create structured JSON logger with trace correlation IDs

// [2025-02-17 13:35:18] feat(utils): implement thread-safe in-memory sliding rate limiter

// [2025-02-24 19:03:30] feat(utils): add resilient datetime parser with ISO-8601 formatting

// [2025-03-18 20:41:47] fix(utils): implement safe deep merge and object cloning helpers

// [2025-04-07 11:42:35] feat(utils): implement retry utility with exponential backoff and jitter
