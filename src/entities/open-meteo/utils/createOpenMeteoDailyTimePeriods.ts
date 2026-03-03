import {
  getDailyTimePeriodFromDate,
  FORECAST_TIME_PERIOD_MAP,
} from "@/features";
import {
  type OpenMeteoForecastDailyTimePeriods,
  type OpenMeteoForecastHourlyListItem,
} from "../types";
import { groupOpenMeteoHourlyForecastListByDateAndPeriod } from "./groupOpenMeteoHourlyForecastListByDateAndPeriod";

export const createOpenMeteoDailyTimePeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastDailyTimePeriods => {
  return groupOpenMeteoHourlyForecastListByDateAndPeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_TIME_PERIOD_MAP,
  );
};
