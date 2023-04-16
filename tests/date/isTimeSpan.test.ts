import { TimeSpan, isTimeSpan } from '../../src/date';

test('isTimeSpan', () => {
  expect(isTimeSpan(TimeSpan.fromMilliSeconds(0))).toBe(true);
  expect(isTimeSpan(0)).toBe(false);
});
