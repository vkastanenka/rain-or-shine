import {
  getDailyTimePeriodFromDate,
  FORECAST_DAILY_TIME_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastByDateAndTimePeriod } from "./groupHourlyForecastByDateAndTimePeriod";
import type {
  NormalizedForecastHourlyListItem,
  ForecastTimePeriods,
} from "../types";

export const createForecastDailyTimePeriods = (
  hourlyList: NormalizedForecastHourlyListItem[],
): ForecastTimePeriods => {
  return groupHourlyForecastByDateAndTimePeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_DAILY_TIME_PERIOD_MAP,
  );
};
