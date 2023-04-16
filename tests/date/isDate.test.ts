import { isDate } from '../../src/date/fns/isDate';

test('isDate', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate('2023-04-16')).toBe(false);
});
