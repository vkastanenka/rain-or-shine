import {
  type OpenMeteoForecastHourlyListItem,
  type OpenMeteoForecastTimePeriodListItem,
} from "../types";
import { calculateOpenMeteoForecastHourlyListAverages } from "./calculateOpenMeteoForecastHourlyListAverages";

export const createOpenMeteoTimePeriodListItem = (
  timePeriodKey: string,
  hourlyItems: OpenMeteoForecastHourlyListItem[],
  fallbackDate: string,
): OpenMeteoForecastTimePeriodListItem => {
  const averages = calculateOpenMeteoForecastHourlyListAverages(hourlyItems);

  return {
    timePeriod: timePeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    ...averages,
  };
};
