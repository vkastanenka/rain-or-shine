import { type UnwrapArray } from "@/types";
import { FORECAST_INTERVAL_MAP } from "../constants";
import { type ForecastIntervalMapValue } from "./base";
import { type ForecastResponse } from "./responses";

export type ForecastRecord<
  T extends ForecastIntervalMapValue,
  K extends keyof NonNullable<ForecastResponse[T]> = keyof NonNullable<
    ForecastResponse[T]
  >,
> = {
  [P in K]: UnwrapArray<NonNullable<ForecastResponse[T]>[P]>;
};

export type CurrentForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVAL_MAP.Current
>;

export type DailyForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVAL_MAP.Daily
>;

export type HourlyForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVAL_MAP.Hourly
> & { period?: string };
