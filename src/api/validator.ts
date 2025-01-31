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
