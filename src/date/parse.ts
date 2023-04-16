import { isInteger } from '../number';
import { isString } from '../string';
import { isDate } from './isDate';

export function parse(value: string | number | Date): Date {
  if (isString(value) || isInteger(value) || isDate(value)) {
    return new Date(value);
  }

  throw new Error('Invalid argument type');
}
