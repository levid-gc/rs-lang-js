import { StringComparison } from '../StringComparison';
import { isString } from './isString';

/**
 * Determines whether the end of this string instance matches a specified string.
 *
 * @param str
 * @param substr
 * @param comparisonType
 * @returns
 */
export function endsWith(str: string, substr: string, comparisonType = StringComparison.Ordinal): boolean {
  if (!isString(str)) {
    throw new Error('Invalid value of str');
  }

  if (!isString(substr)) {
    throw new Error('Invalid value of substr');
  }

  if (comparisonType === StringComparison.OrdinalIgnoreCase) {
    return str.toLowerCase().endsWith(substr.toLowerCase());
  } else if (comparisonType === StringComparison.CultureIgnoreCase) {
    return str.toLocaleLowerCase().endsWith(substr.toLocaleLowerCase());
  } else {
    return str.endsWith(substr);
  }
}
