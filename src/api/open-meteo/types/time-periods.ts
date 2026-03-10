import type { HourlyForecastRecord } from "./normalized";

export type HourlyForecastGroupedByPeriod = Record<
  string,
  Record<string, HourlyForecastRecord[]>
>;

export type HourlyForecastPeriodItem = HourlyForecastRecord & {
  timePeriod: string;
};

export type HourlyForecastDayCollection = {
  date: string;
  periods: HourlyForecastPeriodItem[];
};
