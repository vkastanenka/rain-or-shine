import type { ForecastDiurnalPeriodMapValue } from "@/features";
import { createOpenMeteoTimePeriodListItem } from "./createOpenMeteoTimePeriodListItem";
import type {
  OpenMeteoForecastTimePeriods,
  OpenMeteoHourlyForecastByTimePeriodListItem,
} from "../types";

export const createOpenMeteoTimePeriodListData = (
  timePeriods: OpenMeteoForecastTimePeriods,
): OpenMeteoHourlyForecastByTimePeriodListItem[] => {
  const timePeriodsList = Object.entries(timePeriods).map(
    ([dateKey, periods]) => {
      const timePeriodItems = Object.entries(periods).map(
        ([diurnalPeriodKey, hourlyItems]) =>
          createOpenMeteoTimePeriodListItem(
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
