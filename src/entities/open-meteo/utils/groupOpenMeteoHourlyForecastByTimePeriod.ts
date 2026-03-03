import {
  getDailyTimePeriodFromDate,
  FORECAST_TIME_PERIOD_MAP,
  type ForecastTimePeriodMapValue,
} from "@/features";
import {
  type OpenMeteoForecastDailyTimePeriods,
  type OpenMeteoForecastDailyTimePeriodListItem,
  type OpenMeteoForecastHourlyListItem,
  type OpenMeteoHourlyForecastByDailyTimePeriod,
} from "../types";

// Group raw hourly objects into Day -> Period buckets
export const createOpenMeteoDailyTimePeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastDailyTimePeriods => {
  const dailyTimePeriods: OpenMeteoForecastDailyTimePeriods = {};

  hourlyList.forEach((hourlyListItem) => {
    const dateKey = hourlyListItem.time.split("T")[0];
    const timePeriod = getDailyTimePeriodFromDate(hourlyListItem.time);

    if (!dailyTimePeriods[dateKey])
      dailyTimePeriods[dateKey] = {
        [FORECAST_TIME_PERIOD_MAP.Morning]: [],
        [FORECAST_TIME_PERIOD_MAP.Afternoon]: [],
        [FORECAST_TIME_PERIOD_MAP.Evening]: [],
        [FORECAST_TIME_PERIOD_MAP.Overnight]: [],
      };

    dailyTimePeriods[dateKey][timePeriod].push(hourlyListItem);
  });

  return dailyTimePeriods;
};

// Calculate averages of all values forecast hourly list
const calculateOpenMeteoForecastHourlyListAverages = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): Record<string, number> => {
  const count = hourlyList.length;
  if (count === 0) return {};

  // Summation
  const totals = hourlyList.reduce(
    (acc, curr) => {
      Object.entries(curr).forEach(([key, value]) => {
        if (
          key !== "time" &&
          key !== "weather_code" &&
          typeof value === "number"
        ) {
          acc[key] = (acc[key] || 0) + value;
        }
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // Division
  const averages = Object.entries(totals).reduce(
    (acc, [key, sum]) => {
      acc[key] = Number((sum / count).toFixed(2));
      return acc;
    },
    {} as Record<string, number>,
  );

  return averages;
};

export const createOpenMeteoDailyTimePeriodListItem = (
  timePeriodKey: ForecastTimePeriodMapValue,
  hourlyItems: OpenMeteoForecastHourlyListItem[],
  fallbackDate: string,
): OpenMeteoForecastDailyTimePeriodListItem => {
  const averages = calculateOpenMeteoForecastHourlyListAverages(hourlyItems);

  return {
    timePeriod: timePeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    weather_code: 0, // Logic for most frequent weather code could go here later
    ...averages,
  };
};

export const createOpenMeteoDailyTimePeriodListData = (
  dailyTimePeriods: OpenMeteoForecastDailyTimePeriods,
): OpenMeteoHourlyForecastByDailyTimePeriod => {
  const dailyTimePeriodsList = Object.entries(dailyTimePeriods).map(
    ([dateKey, periods]) => {
      const dailyTimePeriodItems = Object.entries(periods).map(
        ([timePeriodKey, hourlyItems]) =>
          createOpenMeteoDailyTimePeriodListItem(
            timePeriodKey as ForecastTimePeriodMapValue,
            hourlyItems,
            dateKey,
          ),
      );

      return {
        time: dateKey,
        dailyTimePeriodItems,
      };
    },
  );

  return dailyTimePeriodsList;
};

export const groupOpenMeteoHourlyForecastByDateTimePeriod = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoHourlyForecastByDailyTimePeriod => {
  const dailyTimePeriods = createOpenMeteoDailyTimePeriods(hourlyList);
  const dailyTimePeriodsListData =
    createOpenMeteoDailyTimePeriodListData(dailyTimePeriods);
  return dailyTimePeriodsListData;
};

export const createOpenMeteoDailyTimePeriodList = (
  dailyTimePeriodListData: {
    time: string;
    dailyTimePeriodItems: OpenMeteoForecastDailyTimePeriodListItem[];
  }[],
): OpenMeteoForecastDailyTimePeriodListItem[] => {
  const dailyTimePeriodList = dailyTimePeriodListData.reduce(
    (acc: OpenMeteoForecastDailyTimePeriodListItem[], curr) => {
      return [...acc, ...(curr?.dailyTimePeriodItems ?? [])];
    },
    [],
  );
  return dailyTimePeriodList;
};
