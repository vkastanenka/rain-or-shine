import {
  getDailyTimePeriodFromDate,
  FORECAST_DAILY_TIME_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastCollectionByPeriod } from "./groupHourlyForecastCollectionByPeriod";
import type { HourlyForecastRecord, DailyForecastGroup } from "../types";

export const groupHourlyForecastCollectionByDailyPeriod = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  return groupHourlyForecastCollectionByPeriod(
    hourlyCollection,
    getDailyTimePeriodFromDate,
    FORECAST_DAILY_TIME_PERIOD_MAP,
  );
};
