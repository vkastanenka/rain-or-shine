import {
  getDailyTimePeriodFromDate,
  FORECAST_TIME_PERIOD_MAP,
} from "@/features";
import {
  type OpenMeteoForecastTimePeriods,
  type OpenMeteoForecastHourlyListItem,
} from "../types";
import { groupOpenMeteoHourlyForecastListByDateAndPeriod } from "./groupOpenMeteoHourlyForecastListByDateAndPeriod";

export const createOpenMeteoDailyTimePeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastListByDateAndPeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_TIME_PERIOD_MAP,
  );
};
