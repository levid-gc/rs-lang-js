import { getMonth } from '../../src/date/fns';

test('getMonth', () => {
  expect(getMonth(new Date('2023-04-16'))).toBe(4);
});
