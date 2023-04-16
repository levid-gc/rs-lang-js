import { isDate } from '../../src/date';

test('isDate', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate('2023-04-16')).toBe(false);
});
