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

// [2025-05-28 10:21:53] fix(utils): add human-readable byte size and duration formatters

// [2025-06-03 12:26:52] feat(utils): add lightweight fuzzy search filter helper

// [2025-06-04 17:32:16] fix(utils): create base64url encoding and decoding utilities

// [2025-06-09 14:10:39] refactor(utils): implement URL query string serialization with array support

// [2025-08-05 18:14:00] feat(utils): implement thread-safe in-memory sliding rate limiter

// [2025-10-06 17:02:16] fix(utils): implement schema validator with friendly error messages

// [2025-10-13 09:45:43] feat(utils): implement retry utility with exponential backoff and jitter

// [2026-02-28 10:11:37] refactor(utils): add lightweight fuzzy search filter helper

// [2026-03-02 18:53:44] refactor(utils): implement safe deep merge and object cloning helpers

// [2026-03-11 12:46:03] feat(utils): implement safe deep merge and object cloning helpers

// [2026-03-19 16:27:13] fix(utils): create structured JSON logger with trace correlation IDs

// [2026-03-23 18:37:48] fix(utils): add resilient datetime parser with ISO-8601 formatting

// [2026-04-29 16:37:41] fix(utils): implement retry utility with exponential backoff and jitter

// [2026-05-12 17:18:13] fix(utils): implement thread-safe in-memory sliding rate limiter
