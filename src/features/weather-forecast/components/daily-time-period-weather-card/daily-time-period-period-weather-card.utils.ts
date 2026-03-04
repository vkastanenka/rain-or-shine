import {
  formatOpenMeteoValue,
  type OpenMeteoForecastTimePeriodListItem,
} from "@/entities";
import {
  getBaseWeatherCardProps,
  type BaseWeatherCardProps,
} from "../base-weather-card";

export const getDailyTimePeriodWeatherCardProps = (
  props: OpenMeteoForecastTimePeriodListItem,
): BaseWeatherCardProps => ({
  ...getBaseWeatherCardProps(props),
  primaryTimeLabel: formatOpenMeteoValue.dailyTimePeriod(props.time),
});
