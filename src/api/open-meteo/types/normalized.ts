import { type UnwrapArray } from "@/types";
import { FORECAST_INTERVALS } from "../constants";
import { type ForecastIntervalValue } from "./base";
import { type ForecastResponse } from "./responses";

export type ForecastRecord<
  T extends ForecastIntervalValue,
  K extends keyof NonNullable<ForecastResponse[T]> = keyof NonNullable<
    ForecastResponse[T]
  >,
> = {
  [P in K]: UnwrapArray<NonNullable<ForecastResponse[T]>[P]>;
};

export type CurrentForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVALS.Current
>;

export type DailyForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVALS.Daily
>;

export type HourlyForecastRecord = ForecastRecord<
  typeof FORECAST_INTERVALS.Hourly
>;
