export class SchemaValidator {
  public static validateString(val: unknown, min = 1, max = 255): boolean {
    return typeof val === 'string' && val.length >= min && val.length <= max;
  }

  public static validateNumber(val: unknown, min?: number, max?: number): boolean {
    if (typeof val !== 'number' || isNaN(val)) return false;
    if (min !== undefined && val < min) return false;
    if (max !== undefined && val > max) return false;
    return true;
  }
}

// [2025-01-21 18:52:53] feat(api): support streaming JSON responses for large payloads

// [2025-01-31 10:58:50] fix(api): support streaming JSON responses for large payloads

// [2025-02-10 13:08:27] feat(api): support streaming JSON responses for large payloads

// [2025-02-28 18:47:31] fix(api): implement rate limiting strategy by client IP

// [2025-04-09 13:17:46] fix(api): sanitize request headers before routing

// [2025-05-06 10:47:18] feat(api): support batch query filter parameters

// [2025-05-15 20:58:20] fix(api): add cursor-based pagination for query endpoints

// [2025-06-06 22:27:11] feat(api): implement exponential backoff on upstream service retries

// [2025-06-19 12:30:40] feat(api): add request idempotency key header validation

// [2025-06-21 17:18:23] feat(api): implement rate limiting strategy by client IP

// [2025-09-01 11:08:10] refactor(api): add request payload validation schema with strict types

// [2025-09-19 21:57:47] feat(api): add request idempotency key header validation

// [2025-09-23 14:47:23] feat(api): add health check and liveness probe endpoints

// [2025-10-15 17:59:08] feat(api): introduce OpenAPI specification generation utility

// [2025-10-17 16:06:05] feat(api): normalize error response structure across controllers

// [2025-10-28 11:26:34] feat(api): support batch query filter parameters

// [2025-11-03 20:49:28] feat(api): support streaming JSON responses for large payloads

// [2025-11-07 16:41:50] feat(api): add request idempotency key header validation

// [2025-11-28 16:33:52] feat(api): add request payload validation schema with strict types

// [2025-12-01 14:16:34] fix(api): support streaming JSON responses for large payloads

// [2026-01-06 14:50:02] fix(api): sanitize request headers before routing

// [2026-01-15 15:33:52] feat(api): sanitize request headers before routing

// [2026-02-02 13:40:11] feat(api): implement exponential backoff on upstream service retries

// [2026-02-05 18:05:21] refactor(api): sanitize request headers before routing

// [2026-02-23 17:17:27] refactor(api): introduce OpenAPI specification generation utility

// [2026-02-27 10:48:57] fix(api): implement rate limiting strategy by client IP

// [2026-02-27 14:22:12] refactor(api): add request idempotency key header validation

// [2026-03-17 11:49:24] feat(api): support batch query filter parameters

// [2026-04-02 09:14:31] feat(api): add health check and liveness probe endpoints

// [2026-04-13 19:38:47] refactor(api): add request idempotency key header validation

// [2026-04-15 12:11:54] feat(api): add request idempotency key header validation

// [2026-04-29 09:12:23] feat(api): support batch query filter parameters

// [2026-06-15 10:07:57] feat(api): implement rate limiting strategy by client IP

// [2026-06-15 10:15:39] refactor(api): normalize error response structure across controllers

// [2026-06-16 20:58:21] feat(api): implement exponential backoff on upstream service retries

// [2026-06-19 14:17:11] fix(api): normalize error response structure across controllers

// [2026-06-26 15:00:03] feat(api): add HMAC signature verification for incoming webhooks

// [2026-07-29 12:01:23] feat(api): implement rate limiting strategy by client IP

// [2026-07-30 14:34:32] feat(api): implement rate limiting strategy by client IP

// [2026-08-13 15:54:35] feat(api): support batch query filter parameters

// [2026-08-20 09:04:10] feat(api): add HMAC signature verification for incoming webhooks

// [2026-08-24 20:20:03] fix(api): add request payload validation schema with strict types

// [2026-09-17 14:30:17] refactor(api): normalize error response structure across controllers
