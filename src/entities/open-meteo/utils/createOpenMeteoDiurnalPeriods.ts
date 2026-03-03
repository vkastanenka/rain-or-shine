import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import {
  type OpenMeteoForecastTimePeriods,
  type OpenMeteoForecastHourlyListItem,
} from "../types";
import { groupOpenMeteoHourlyForecastListByDateAndPeriod } from "./groupOpenMeteoHourlyForecastListByDateAndPeriod";

export const createOpenMeteoDiurnalPeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastListByDateAndPeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
