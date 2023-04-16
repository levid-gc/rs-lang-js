/**
 * add specific number of months depends on the provided date
 *
 * @param date
 * @param months
 * @returns
 */
export function addMonths(date: Date, months: number): Date {
  months = Number(months);
  if (Number.isNaN(months)) {
    throw new Error('invalid value of months');
  }

  const newDate = new Date(date);
  const newMonths = newDate.getMonth() + months;
  newDate.setMonth(newMonths);
  return newDate;
}
