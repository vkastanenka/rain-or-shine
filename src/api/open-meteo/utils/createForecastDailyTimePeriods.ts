import {
  getDailyTimePeriodFromDate,
  FORECAST_DAILY_TIME_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastByDateAndTimePeriod } from "./groupHourlyForecastByDateAndTimePeriod";
import type {
  HourlyForecastRecord,
  HourlyForecastGroupedByPeriod,
} from "../types";

export const createForecastDailyTimePeriods = (
  hourlyList: HourlyForecastRecord[],
): HourlyForecastGroupedByPeriod => {
  return groupHourlyForecastByDateAndTimePeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_DAILY_TIME_PERIOD_MAP,
  );
};
