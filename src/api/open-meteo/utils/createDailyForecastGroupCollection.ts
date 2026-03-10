import type { ForecastDiurnalPeriodMapValue } from "@/features";
import { createHourlyForecastRecord } from "./createHourlyForecastRecord";
import type { DailyForecastMap, DailyForecastGroup } from "../types";

export const createDailyForecastGroupCollection = (
  dailyForecastMap: DailyForecastMap,
): DailyForecastGroup[] => {
  return Object.entries(dailyForecastMap).map(([date, periods]) => {
    const collection = Object.entries(periods).map(
      ([diurnalPeriodKey, hourlyItems]) =>
        createHourlyForecastRecord(
          diurnalPeriodKey as ForecastDiurnalPeriodMapValue,
          hourlyItems,
          date,
        ),
    );
    return {
      date,
      collection,
    };
  });
};
