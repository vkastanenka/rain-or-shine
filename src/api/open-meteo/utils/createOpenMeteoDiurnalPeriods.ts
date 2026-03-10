import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { groupOpenMeteoHourlyForecastByDateAndPeriod } from "./groupOpenMeteoHourlyForecastByDateAndPeriod";
import type {
  NormalizedOpenMeteoForecastHourlyListItem,
  OpenMeteoForecastTimePeriods,
} from "../types";

export const createOpenMeteoDiurnalPeriods = (
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastByDateAndPeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
