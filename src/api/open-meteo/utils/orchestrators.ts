import type { ForecastDiurnalPeriodMapValue } from "@/features";
import type {
  DailyForecastMap,
  DailyForecastGroup,
  HourlyForecastRecord,
} from "../types";
import { calculateHourlyForecastCollectionAverages } from "./calculations";

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

export const createHourlyForecastCollection = (
  dailyForecastGroupCollection: DailyForecastGroup[],
): HourlyForecastRecord[] => {
  return dailyForecastGroupCollection.flatMap(
    (group) => group.collection ?? [],
  );
};

export const createHourlyForecastRecord = (
  periodKey: string,
  hourlyCollection: HourlyForecastRecord[],
  fallbackDate: string,
): HourlyForecastRecord => {
  const averages = calculateHourlyForecastCollectionAverages(hourlyCollection);

  return {
    period: periodKey,
    time: hourlyCollection[0]?.time || fallbackDate,
    ...averages,
  };
};
