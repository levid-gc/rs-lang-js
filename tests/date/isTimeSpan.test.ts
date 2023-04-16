import { TimeSpan } from '../../src/date';
import { isTimeSpan } from '../../src/date/fns/isTimeSpan';

test('isTimeSpan', () => {
  expect(isTimeSpan(TimeSpan.fromMilliSeconds(0))).toBe(true);
  expect(isTimeSpan(0)).toBe(false);
});
