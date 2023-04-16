import { addMonths } from '../../src/date/fns';

it('should throw when the months is not a valid number', () => {
  expect(() => addMonths(new Date(), Number.NaN)).toThrow();
});

it('should add positive months', () => {
  const date = new Date('2023-04-16');
  expect(addMonths(date, 1).getMonth()).toBe(4);
  expect(addMonths(date, 10).getMonth()).toBe(1);
});

it('should add negative days', () => {
  const date = new Date('2023-04-16');
  expect(addMonths(date, -1).getMonth()).toBe(2);
  expect(addMonths(date, -10).getMonth()).toBe(5);
});
