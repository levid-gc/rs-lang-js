import { DayOfWeek } from '../../src/date';
import { getDayOfWeek } from '../../src/date/fns';

test('getDayOfWeek', () => {
  expect(getDayOfWeek(new Date('2023-04-16'))).toBe(DayOfWeek.Sunday);
  expect(getDayOfWeek(new Date('2023-04-17'))).toBe(DayOfWeek.Monday);
  expect(getDayOfWeek(new Date('2023-04-18'))).toBe(DayOfWeek.Tuesday);
  expect(getDayOfWeek(new Date('2023-04-19'))).toBe(DayOfWeek.Wednesday);
  expect(getDayOfWeek(new Date('2023-04-20'))).toBe(DayOfWeek.Thursday);
  expect(getDayOfWeek(new Date('2023-04-21'))).toBe(DayOfWeek.Friday);
  expect(getDayOfWeek(new Date('2023-04-22'))).toBe(DayOfWeek.Saturday);
});
