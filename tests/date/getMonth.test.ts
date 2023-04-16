import { getMonth } from '../../src/date';

test('getMonth', () => {
  expect(getMonth(new Date('2023-04-16'))).toBe(4);
});
