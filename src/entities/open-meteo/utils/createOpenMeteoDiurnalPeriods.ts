import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import {
  type OpenMeteoForecastDiurnalPeriods,
  type OpenMeteoForecastHourlyListItem,
} from "../types";
import { groupOpenMeteoHourlyForecastListByDateAndPeriod } from "./groupOpenMeteoHourlyForecastListByDateAndPeriod";

export const createOpenMeteoDiurnalPeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastDiurnalPeriods => {
  return groupOpenMeteoHourlyForecastListByDateAndPeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
