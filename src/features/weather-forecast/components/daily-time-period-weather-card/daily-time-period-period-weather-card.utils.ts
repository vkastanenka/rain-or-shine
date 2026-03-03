import {
  formatOpenMeteoValue,
  type OpenMeteoForecastHourlyListItem,
} from "@/entities";
import {
  getBaseWeatherCardProps,
  type BaseWeatherCardProps,
} from "../base-weather-card";

export const getDailyTimePeriodWeatherCardProps = (
  props: OpenMeteoForecastHourlyListItem,
): BaseWeatherCardProps => ({
  ...getBaseWeatherCardProps(props),
  primaryTimeLabel: formatOpenMeteoValue.dailyTimePeriod(props.time),
});
