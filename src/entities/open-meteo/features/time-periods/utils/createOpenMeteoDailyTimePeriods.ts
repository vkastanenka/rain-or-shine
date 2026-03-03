import {
  getDailyTimePeriodFromDate,
  FORECAST_TIME_PERIOD_MAP,
} from "@/features";
import { type OpenMeteoForecastHourlyListItem } from "../../../types";
import { type OpenMeteoForecastTimePeriods } from "../types";
import { groupOpenMeteoHourlyForecastByDateAndPeriod } from "./groupOpenMeteoHourlyForecastByDateAndPeriod";

export const createOpenMeteoDailyTimePeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastByDateAndPeriod(
    hourlyList,
    getDailyTimePeriodFromDate,
    FORECAST_TIME_PERIOD_MAP,
  );
};
