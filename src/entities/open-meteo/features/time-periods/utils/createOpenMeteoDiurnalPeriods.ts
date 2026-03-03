import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { type OpenMeteoForecastHourlyListItem } from "../../../types";
import { type OpenMeteoForecastTimePeriods } from "../types";
import { groupOpenMeteoHourlyForecastByDateAndPeriod } from "./groupOpenMeteoHourlyForecastByDateAndPeriod";

export const createOpenMeteoDiurnalPeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastTimePeriods => {
  return groupOpenMeteoHourlyForecastByDateAndPeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
