/**
 * gets the month
 *
 * @param date
 * @returns between 1 and 12
 */
export function getMonth(date: Date): number {
  return date.getMonth() + 1;
}
