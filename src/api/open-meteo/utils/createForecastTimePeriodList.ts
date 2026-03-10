import type { ForecastDiurnalPeriodMapValue } from "@/features";
import { createForecastTimePeriodListItem } from "./createForecastTimePeriodListItem";
import type {
  ForecastTimePeriods,
  HourlyForecastByTimePeriodListItem,
} from "../types";

export const createForecastTimePeriodList = (
  timePeriods: ForecastTimePeriods,
): HourlyForecastByTimePeriodListItem[] => {
  const timePeriodsList = Object.entries(timePeriods).map(
    ([dateKey, periods]) => {
      const timePeriodItems = Object.entries(periods).map(
        ([diurnalPeriodKey, hourlyItems]) =>
          createForecastTimePeriodListItem(
            diurnalPeriodKey as ForecastDiurnalPeriodMapValue,
            hourlyItems,
            dateKey,
          ),
      );

      return {
        time: dateKey,
        timePeriodItems,
      };
    },
  );

  return timePeriodsList;
};
