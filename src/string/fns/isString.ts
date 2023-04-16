/**
 * Whether the provided value is a string
 *
 * @param value
 * @returns
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}
