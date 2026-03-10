import { type UnwrapArray } from "@/types";
import { TIME_INTERVAL_MAP } from "../constants";
import { type TimeIntervalMapValue } from "./base";
import { type ForecastResponse } from "./responses";

export type NormalizedForecastTimeIntervalListItem<
  T extends TimeIntervalMapValue,
  K extends keyof NonNullable<ForecastResponse[T]> = keyof NonNullable<
    ForecastResponse[T]
  >,
> = {
  [P in K]: UnwrapArray<NonNullable<ForecastResponse[T]>[P]>;
};

export type NormalizedForecastCurrentListItem =
  NormalizedForecastTimeIntervalListItem<typeof TIME_INTERVAL_MAP.Current>;

export type NormalizedForecastDailyListItem =
  NormalizedForecastTimeIntervalListItem<typeof TIME_INTERVAL_MAP.Daily>;

export type NormalizedForecastHourlyListItem =
  NormalizedForecastTimeIntervalListItem<typeof TIME_INTERVAL_MAP.Hourly>;
