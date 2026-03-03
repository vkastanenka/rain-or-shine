import {
  type OpenMeteoForecastHourlyListItem,
  // type OpenMeteoForecastTimePeriodListItem,
} from "../../../types";
import { type OpenMeteoForecastTimePeriodListItem } from "../types";
import { calculateOpenMeteoForecastHourlyListAverages } from "@/entities/open-meteo/utils";

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
