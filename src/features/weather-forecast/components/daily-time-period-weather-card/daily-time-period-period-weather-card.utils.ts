import {
  formatOpenMeteoValue,
  type OpenMeteoForecastDailyTimePeriodListItem,
} from "@/entities";
import {
  getBaseWeatherCardProps,
  type BaseWeatherCardProps,
} from "../base-weather-card";

export const getDailyTimePeriodWeatherCardProps = (
  props: OpenMeteoForecastDailyTimePeriodListItem,
): BaseWeatherCardProps => ({
  ...getBaseWeatherCardProps(props),
  primaryTimeLabel: formatOpenMeteoValue.dailyTimePeriod(props.time),
});
