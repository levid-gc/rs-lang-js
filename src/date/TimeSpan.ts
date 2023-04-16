import { isFinite } from '../number';

export class TimeSpan {
  private tickets: number = 0;

  public static fromDays(days: number): TimeSpan {
    if (!isFinite(days)) {
      throw new Error('Invalid value of days');
    }
    return new TimeSpan(TimeSpan.daysToMilliSeconds(days));
  }

  public static fromHours(hours: number): TimeSpan {
    if (!isFinite(hours)) {
      throw new Error('Invalid value of hours');
    }
    return new TimeSpan(TimeSpan.hoursToMilliSeconds(hours));
  }

  public static fromMinutes(minutes: number): TimeSpan {
    if (!isFinite(minutes)) {
      throw new Error('Invalid value of minutes');
    }
    return new TimeSpan(TimeSpan.minutesToMilliSeconds(minutes));
  }

  public static fromSeconds(seconds: number): TimeSpan {
    if (!isFinite(seconds)) {
      throw new Error('Invalid value of seconds');
    }
    return new TimeSpan(TimeSpan.minutesToMilliSeconds(seconds));
  }

  public static fromMilliSeconds(milliSeconds: number): TimeSpan {
    if (!isFinite(milliSeconds)) {
      throw new Error('Invalid value of milliSeconds');
    }
    return new TimeSpan(Math.round(milliSeconds));
  }

  /**
   * Initializes a new instance of TimeSpace
   *
   * @param tickets Time period expressed in ms units
   */
  public constructor(tickets: number) {
    if (!isFinite(tickets)) {
      throw new Error('Invalid value of tickets');
    }

    this.tickets = Math.round(tickets);
  }

  public get totalMilliSeconds(): number {
    return this.tickets;
  }

  public get totalSeconds(): number {
    return this.tickets / 1000;
  }

  public get totalMinutes(): number {
    return Number((this.totalSeconds / 60).toFixed(3));
  }

  public get totalHours(): number {
    return Number((this.totalSeconds / 60 / 60).toFixed(3));
  }

  public get totalDays(): number {
    return Number((this.totalSeconds / 60 / 60 / 24).toFixed(3));
  }

  public get days(): number {
    return Math.floor(this.totalDays);
  }

  public get hours(): number {
    const remains =
      this.totalMilliSeconds - TimeSpan.daysToMilliSeconds(this.days);
    return Math.floor(remains / 1000 / 60 / 60);
  }

  public get minutes(): number {
    const remains =
      this.totalMilliSeconds -
      TimeSpan.daysToMilliSeconds(this.days) -
      TimeSpan.hoursToMilliSeconds(this.hours);
    return Math.floor(remains / 1000 / 60);
  }

  public get seconds(): number {
    const remains =
      this.totalMilliSeconds -
      TimeSpan.daysToMilliSeconds(this.days) -
      TimeSpan.hoursToMilliSeconds(this.hours) -
      TimeSpan.minutesToMilliSeconds(this.minutes);
    return Math.floor(remains / 1000);
  }

  public get milliSeconds(): number {
    const remains =
      this.totalMilliSeconds -
      TimeSpan.daysToMilliSeconds(this.days) -
      TimeSpan.hoursToMilliSeconds(this.hours) -
      TimeSpan.minutesToMilliSeconds(this.minutes) -
      TimeSpan.secondsToMilliSeconds(this.seconds);
    return remains;
  }

  private static daysToMilliSeconds(days: number): number {
    return Math.round(days * 24 * 60 * 60 * 1000);
  }

  private static hoursToMilliSeconds(hours: number): number {
    return Math.round(hours * 60 * 60 * 1000);
  }

  private static minutesToMilliSeconds(minutes: number): number {
    return Math.round(minutes * 60 * 1000);
  }

  private static secondsToMilliSeconds(seconds: number): number {
    return Math.round(seconds * 1000);
  }
}
