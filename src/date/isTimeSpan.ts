import { TimeSpan } from './TimeSpan';

export function isTimeSpan(value: any): value is TimeSpan {
  return Object.prototype.toString.call(value) === '[object TimeSpan]';
}
