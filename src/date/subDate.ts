import { TimeSpan } from './TimeSpan';
import { isDate } from './isDate';

export function subDate(date1: Date, date2: Date): TimeSpan {
  if (!isDate(date1)) {
    throw new Error('Invalid value of date1');
  }

  if (!isDate(date2)) {
    throw new Error('Invalid value of date2');
  }

  return TimeSpan.fromMilliSeconds(date1.getTime() - date2.getTime());
}
