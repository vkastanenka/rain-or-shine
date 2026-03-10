import type { ForecastTimePeriodListItem } from "../types";

export const createForecastTimePeriodsList = (
  timePeriodListData: {
    time: string;
    timePeriodItems: ForecastTimePeriodListItem[];
  }[],
): ForecastTimePeriodListItem[] => {
  const timePeriodList = timePeriodListData.reduce(
    (acc: ForecastTimePeriodListItem[], curr) => {
      return [...acc, ...(curr?.timePeriodItems ?? [])];
    },
    [],
  );
  return timePeriodList;
};
