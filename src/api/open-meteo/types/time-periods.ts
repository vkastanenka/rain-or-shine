import type { HourlyForecastRecord } from "./normalized";

export type DailyForecastGroup = {
  date: string;
  collection: HourlyForecastRecord[];
};

export type DailyForecastMap = Record<
  string,
  Record<string, HourlyForecastRecord[]>
>;
