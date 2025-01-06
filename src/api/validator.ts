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
