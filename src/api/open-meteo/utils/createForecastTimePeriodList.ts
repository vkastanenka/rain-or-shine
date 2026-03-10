import type { ForecastDiurnalPeriodMapValue } from "@/features";
import { createForecastTimePeriodListItem } from "./createForecastTimePeriodListItem";
import type {
  HourlyForecastGroupedByPeriod,
  HourlyForecastDayCollection,
} from "../types";

export const createForecastTimePeriodList = (
  timePeriods: HourlyForecastGroupedByPeriod,
): HourlyForecastDayCollection[] => {
  return Object.entries(timePeriods).map(([dateKey, periods]) => {
    const timePeriodItems = Object.entries(periods).map(
      ([diurnalPeriodKey, hourlyItems]) =>
        createForecastTimePeriodListItem(
          diurnalPeriodKey as ForecastDiurnalPeriodMapValue,
          hourlyItems,
          dateKey,
        ),
    );

    return {
      date: dateKey,
      periods: timePeriodItems,
    };
  });
};
