import { type OpenMeteoForecastTimePeriodListItem } from "../types";

export const createOpenMeteoTimePeriodList = (
  timePeriodListData: {
    time: string;
    timePeriodItems: OpenMeteoForecastTimePeriodListItem[];
  }[],
): OpenMeteoForecastTimePeriodListItem[] => {
  const timePeriodList = timePeriodListData.reduce(
    (acc: OpenMeteoForecastTimePeriodListItem[], curr) => {
      return [...acc, ...(curr?.timePeriodItems ?? [])];
    },
    [],
  );
  return timePeriodList;
};
