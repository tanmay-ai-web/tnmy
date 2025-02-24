export function toIsoString(date: Date = new Date()): string {
  return date.toISOString();
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// [2025-01-15 11:46:45] feat(utils): create base64url encoding and decoding utilities

// [2025-01-16 14:55:57] fix(utils): implement URL query string serialization with array support

// [2025-01-22 11:02:00] feat(utils): add timing-safe buffer comparison function

// [2025-01-28 15:36:45] feat(utils): add timing-safe buffer comparison function

// [2025-02-03 15:56:42] feat(utils): create base64url encoding and decoding utilities

// [2025-02-24 12:51:22] feat(utils): add resilient datetime parser with ISO-8601 formatting
