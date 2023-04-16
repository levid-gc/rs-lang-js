import { isInteger } from '../number';
import { isDate } from './isDate';

/**
 * add specific number of months depends on the provided date
 *
 * @param date
 * @param months
 * @returns
 */
export function addMonths(date: Date, months: number): Date {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  if (!isInteger(months)) {
    throw new Error('Invalid value of months');
  }

  const newDate = new Date(date);
  const newMonths = newDate.getMonth() + months;
  newDate.setMonth(newMonths);
  return newDate;
}
