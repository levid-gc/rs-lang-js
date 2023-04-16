import { TimeSpan } from '../../src/date';

describe('TimeSpan', () => {
  test('TimeSpan(1)', () => {
    const timeSpan = new TimeSpan(1);

    expect(timeSpan.totalDays).toBe(0);
    expect(timeSpan.totalHours).toBe(0);
    expect(timeSpan.totalMinutes).toBe(0);
    expect(timeSpan.totalSeconds).toBe(0.001);
    expect(timeSpan.totalMilliSeconds).toBe(1);

    expect(timeSpan.days).toBe(0);
    expect(timeSpan.hours).toBe(0);
    expect(timeSpan.minutes).toBe(0);
    expect(timeSpan.seconds).toBe(0);
    expect(timeSpan.milliSeconds).toBe(1);
  });

  test('TimeSpan(11122233344)', () => {
    const timeSpan = new TimeSpan(11122233344);

    expect(timeSpan.totalDays).toBe(128.73);
    expect(timeSpan.totalHours).toBe(3089.509);
    expect(timeSpan.totalMinutes).toBe(185370.556);
    expect(timeSpan.totalSeconds).toBe(11122233.344);
    expect(timeSpan.totalMilliSeconds).toBe(11122233344);

    expect(timeSpan.days).toBe(128);
    expect(timeSpan.hours).toBe(17);
    expect(timeSpan.minutes).toBe(30);
    expect(timeSpan.seconds).toBe(33);
    expect(timeSpan.milliSeconds).toBe(344);
  });
});
