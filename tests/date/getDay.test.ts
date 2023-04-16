import { getDay } from '../../src/date/fns';

test('getDay', () => {
  expect(getDay(new Date('2023-04-16'))).toBe(16);
});
