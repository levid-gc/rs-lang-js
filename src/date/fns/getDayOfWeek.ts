import { DayOfWeek } from '../DayOfWeek';
import { isDate } from './isDate';

/**
 * gets the day of week
 *
 * @param date
 * @returns between 0 and 6
 */
export function getDayOfWeek(date: Date): DayOfWeek {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  return date.getDay();
}
