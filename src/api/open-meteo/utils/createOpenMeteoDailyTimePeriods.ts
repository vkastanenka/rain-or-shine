import {
  getDailyTimePeriodFromDate,
  FORECAST_TIME_PERIOD_MAP,
} from "@/features";
import { groupOpenMeteoHourlyForecastByDateAndPeriod } from "./groupOpenMeteoHourlyForecastByDateAndPeriod";
import type {
  NormalizedOpenMeteoForecastHourlyListItem,
  OpenMeteoForecastTimePeriods,
} from "../types";

export const createOpenMeteoDailyTimePeriods = (
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastByDateAndPeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_TIME_PERIOD_MAP,
  );
};
