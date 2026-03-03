import {
  getDiurnalPeriodFromDate,
  FORECAST_DIURNAL_PERIOD_MAP,
  type ForecastDiurnalPeriodMapValue,
} from "@/features";
import {
  type OpenMeteoForecastDiurnalPeriods,
  type OpenMeteoForecastDiurnalPeriodListItem,
  type OpenMeteoForecastHourlyListItem,
} from "../types";

// Group raw hourly objects into Day -> Period buckets
export const createOpenMeteoDiurnalPeriods = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoForecastDiurnalPeriods => {
  const diurnalPeriods: OpenMeteoForecastDiurnalPeriods = {};

  hourlyList.forEach((hourlyListItem) => {
    const dateKey = hourlyListItem.time.split("T")[0];
    const timePeriod = getDiurnalPeriodFromDate(hourlyListItem.time);

    if (!diurnalPeriods[dateKey])
      diurnalPeriods[dateKey] = {
        [FORECAST_DIURNAL_PERIOD_MAP.Day]: [],
        [FORECAST_DIURNAL_PERIOD_MAP.Night]: [],
      };

    diurnalPeriods[dateKey][timePeriod].push(hourlyListItem);
  });

  return diurnalPeriods;
};

// Calculate averages of all values forecast hourly list
const calculateOpenMeteoForecastHourlyListAveragesNEW = (
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

export const createOpenMeteoDiurnalPeriodListItem = (
  diurnalPeriodKey: ForecastDiurnalPeriodMapValue,
  hourlyItems: OpenMeteoForecastHourlyListItem[],
  fallbackDate: string,
): OpenMeteoForecastDiurnalPeriodListItem => {
  const averages = calculateOpenMeteoForecastHourlyListAveragesNEW(hourlyItems);

  return {
    diurnalPeriod: diurnalPeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    weather_code: 0, // Logic for most frequent weather code could go here later
    ...averages,
  };
};

export const createOpenMeteoDiurnalPeriodListData = (
  diurnalPeriods: OpenMeteoForecastDiurnalPeriods,
): {
  time: string;
  diurnalPeriodItems: OpenMeteoForecastDiurnalPeriodListItem[];
}[] => {
  const diurnalPeriodsList = Object.entries(diurnalPeriods).map(
    ([dateKey, periods]) => {
      const diurnalPeriodItems = Object.entries(periods).map(
        ([diurnalPeriodKey, hourlyItems]) =>
          createOpenMeteoDiurnalPeriodListItem(
            diurnalPeriodKey as ForecastDiurnalPeriodMapValue,
            hourlyItems,
            dateKey,
          ),
      );

      return {
        time: dateKey,
        diurnalPeriodItems,
      };
    },
  );

  return diurnalPeriodsList;
};

export const groupOpenMeteoHourlyForecastByDiurnalPeriod = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): {
  time: string;
  diurnalPeriodItems: OpenMeteoForecastDiurnalPeriodListItem[];
}[] => {
  const diurnalPeriods = createOpenMeteoDiurnalPeriods(hourlyList);
  const diurnalPeriodsListData =
    createOpenMeteoDiurnalPeriodListData(diurnalPeriods);
  return diurnalPeriodsListData;
};

export const createOpenMeteoDiurnalPeriodList = (
  diurnalTimePeriodListData: {
    time: string;
    diurnalPeriodItems: OpenMeteoForecastDiurnalPeriodListItem[];
  }[],
) => {
  const dailyTimePeriodList = diurnalTimePeriodListData.reduce(
    (acc: OpenMeteoForecastDiurnalPeriodListItem[], curr) => {
      return [...acc, ...(curr?.diurnalPeriodItems ?? [])];
    },
    [],
  );
  return dailyTimePeriodList;
};
