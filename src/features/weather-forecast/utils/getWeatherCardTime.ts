import { format as formatDate } from "date-fns";

export const getHourlyWeatherCardTime = (time: string): string => {
  return formatDate(new Date(time), "ha");
};
