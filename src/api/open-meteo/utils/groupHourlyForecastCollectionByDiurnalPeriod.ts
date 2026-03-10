import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { groupHourlyForecastCollectionByPeriod } from "./groupHourlyForecastCollectionByPeriod";
import type { HourlyForecastRecord, DailyForecastGroup } from "../types";

export const groupHourlyForecastCollectionByDiurnalPeriod = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  return groupHourlyForecastCollectionByPeriod(
    hourlyCollection,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};
