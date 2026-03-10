import { calculateOpenMeteoForecastHourlyListAverages } from "./calculateOpenMeteoForecastHourlyListAverages";
import type {
  NormalizedOpenMeteoForecastHourlyListItem,
  OpenMeteoForecastTimePeriodListItem,
} from "../types";

export const createOpenMeteoTimePeriodListItem = (
  timePeriodKey: string,
  hourlyItems: NormalizedOpenMeteoForecastHourlyListItem[],
  fallbackDate: string,
): OpenMeteoForecastTimePeriodListItem => {
  const averages = calculateOpenMeteoForecastHourlyListAverages(hourlyItems);

  return {
    timePeriod: timePeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    ...averages,
  };
};
