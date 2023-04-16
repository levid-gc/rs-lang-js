import { TimeSpan } from './TimeSpan';
import { isDate } from './isDate';
import { isTimeSpan } from './isTimeSpan';

export function add(date: Date, interval: TimeSpan): Date {
  if (!isDate(date)) {
    throw new Error('Invalid value of date');
  }

  if (!isTimeSpan(interval)) {
    throw new Error('Invalid value of interval');
  }

  return new Date(date.getTime() + interval.totalMilliSeconds);
}
