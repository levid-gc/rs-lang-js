import { isDate } from './isDate';

/**
 * gets the day of month
 *
 * @param date
 * @returns between 1 and 31
 */
export function getDay(date: Date): number {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  return date.getDate();
}
