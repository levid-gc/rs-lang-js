import { isDate } from './isDate';

/**
 * gets the month
 *
 * @param date
 * @returns between 1 and 12
 */
export function getMonth(date: Date): number {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  return date.getMonth() + 1;
}
