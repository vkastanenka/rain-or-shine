import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastByDateAndTimePeriod } from "./groupHourlyForecastByDateAndTimePeriod";
import type {
  HourlyForecastRecord,
  HourlyForecastGroupedByPeriod,
} from "../types";

export const createForecastDiurnalTimePeriods = (
  hourlyList: HourlyForecastRecord[],
): HourlyForecastGroupedByPeriod => {
  return groupHourlyForecastByDateAndTimePeriod(
    hourlyList,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
