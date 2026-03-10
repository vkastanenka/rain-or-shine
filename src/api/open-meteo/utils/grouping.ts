import {
  getDailyTimePeriodFromDate,
  FORECAST_DAILY_TIME_PERIOD_MAP,
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
} from "@/features";
import { createDailyForecastGroupCollection } from "./orchestrators";
import type {
  HourlyForecastRecord,
  DailyForecastGroup,
  DailyForecastMap,
} from "../types";

export const groupHourlyForecastCollectionByDailyPeriod = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  return groupHourlyForecastCollectionByPeriod(
    hourlyCollection,
    getDailyTimePeriodFromDate,
    FORECAST_DAILY_TIME_PERIOD_MAP,
  );
};

export const groupHourlyForecastCollectionByDate = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  const dateMap: Record<string, boolean> = {};
  const grouped: {
    date: string;
    collection: HourlyForecastRecord[];
  }[] = [];

  hourlyCollection.forEach((record) => {
    const dateKey = record.time.split("T")[0];

    if (!dateMap[dateKey]) {
      dateMap[dateKey] = true;
      grouped.push({ date: dateKey, collection: [record] });
      return;
    }

    grouped[grouped.length - 1].collection.push(record);
  });

  return grouped;
};

export const groupHourlyForecastByDateAndPeriod = <T extends string>(
  hourlyCollection: HourlyForecastRecord[],
  getPeriodFn: (time: string) => T,
  periodMap: Record<string, T>,
): DailyForecastMap => {
  const grouped: Record<string, Record<T, HourlyForecastRecord[]>> = {};
  const periodValues = Object.values(periodMap);

  hourlyCollection.forEach((record) => {
    const dateKey = record.time.split("T")[0];
    const timePeriod = getPeriodFn(record.time);

    if (!grouped[dateKey]) {
      grouped[dateKey] = periodValues.reduce(
        (acc, period) => {
          acc[period] = [];
          return acc;
        },
        {} as Record<T, HourlyForecastRecord[]>,
      );
    }

    grouped[dateKey][timePeriod].push(record);
  });

  return grouped;
};

export const groupHourlyForecastCollectionByDiurnalPeriod = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  return groupHourlyForecastCollectionByPeriod(
    hourlyCollection,
    getDiurnalPeriodFromDate,
    FORECAST_DIURNAL_PERIOD_MAP,
  );
};

export const groupHourlyForecastCollectionByPeriod = (
  hourlyCollection: HourlyForecastRecord[],
  getPeriodFn: (time: string) => string,
  periodMap: Record<string, string>,
): DailyForecastGroup[] => {
  const dailyForecastMap = groupHourlyForecastByDateAndPeriod(
    hourlyCollection,
    getPeriodFn,
    periodMap,
  );
  return createDailyForecastGroupCollection(dailyForecastMap);
};
