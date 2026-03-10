import type {
  HourlyForecastDayCollection,
  HourlyForecastPeriodItem,
} from "../types";

export const createForecastTimePeriodsList = (
  timePeriodListData: HourlyForecastDayCollection[],
): HourlyForecastPeriodItem[] => {
  const timePeriodList = timePeriodListData.reduce(
    (acc: HourlyForecastPeriodItem[], curr) => {
      return [...acc, ...(curr?.periods ?? [])];
    },
    [],
  );
  return timePeriodList;
};
