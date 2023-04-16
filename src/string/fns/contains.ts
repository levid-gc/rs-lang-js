import { StringComparison } from '../StringComparison';
import { isString } from './isString';

/**
 * Determines whether a specified substring occurs within this string.
 *
 * @param str
 * @param substr
 * @param comparisonType
 * @returns
 */
export function contains(str: string, substr: string, comparisonType = StringComparison.Ordinal): boolean {
  if (!isString(str)) {
    throw new Error('Invalid value of str');
  }

  if (!isString(substr)) {
    throw new Error('Invalid value of substr');
  }

  if (comparisonType === StringComparison.OrdinalIgnoreCase) {
    return str.toLowerCase().indexOf(substr.toLowerCase()) > -1;
  } else if (comparisonType === StringComparison.CultureIgnoreCase) {
    return str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase()) > -1;
  } else {
    return str.indexOf(substr) > -1;
  }
}
