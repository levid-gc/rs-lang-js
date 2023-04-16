/**
 * add specific number of days depends on the provided date
 *
 * @param date
 * @param days
 * @returns
 */
export function addDays(date: Date, days: number): Date {
  days = Number(days);
  if (Number.isNaN(days)) {
    throw new Error('invalid value of days');
  }

  const newDate = new Date(date);
  const newDays = newDate.getDate() + days;
  newDate.setDate(newDays);
  return newDate;
}
