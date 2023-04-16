import { addDays } from '../../src/date';

it('should throw when the days is not a valid number', () => {
  expect(() => addDays(new Date(), Number.NaN)).toThrow();
});

it('should add positive days', () => {
  const date = new Date('2023-04-16');
  expect(addDays(date, 10).getDate()).toBe(26);
  expect(addDays(date, 20).getDate()).toBe(6);
});

it('should add negative days', () => {
  const date = new Date('2023-04-16');
  expect(addDays(date, -10).getDate()).toBe(6);
  expect(addDays(date, -20).getDate()).toBe(27);
});
