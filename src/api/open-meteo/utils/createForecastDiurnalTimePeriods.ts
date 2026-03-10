import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastByDateAndTimePeriod } from "./groupHourlyForecastByDateAndTimePeriod";
import type {
  NormalizedForecastHourlyListItem,
  ForecastTimePeriods,
} from "../types";

export const createForecastDiurnalTimePeriods = (
  hourlyList: NormalizedForecastHourlyListItem[],
): ForecastTimePeriods => {
  return groupHourlyForecastByDateAndTimePeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
