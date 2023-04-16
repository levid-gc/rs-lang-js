import { isInteger } from '../../number/fns';
import { isDate } from './isDate';

/**
 * add specific number of days depends on the provided date
 *
 * @param date
 * @param days
 * @returns
 */
export function addDays(date: Date, days: number): Date {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  if (!isInteger(days)) {
    throw new Error('Invalid value of days');
  }

  const newDate = new Date(date);
  const newDays = newDate.getDate() + days;
  newDate.setDate(newDays);
  return newDate;
}
