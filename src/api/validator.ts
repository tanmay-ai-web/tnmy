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
