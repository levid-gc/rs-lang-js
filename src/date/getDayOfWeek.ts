import { DayOfWeek } from './DayOfWeek';

/**
 * gets the day of week
 *
 * @param date
 * @returns between 0 and 6
 */
export function getDayOfWeek(date: Date): DayOfWeek {
  return date.getDay();
}
