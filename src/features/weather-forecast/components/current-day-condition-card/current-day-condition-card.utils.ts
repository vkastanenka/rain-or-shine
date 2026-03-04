import {
  formatOpenMeteoValue,
  type OpenMeteoForecastCurrentVariables,
  type OpenMeteoForecastDailyListItem,
} from "@/entities";
import { getWeatherCardIcon } from "../../utils";
import type { CurrentDayConditionCardProps } from "./current-day-condition-card.types";

export const getCurrentDayConditionCardProps = (
  params: OpenMeteoForecastCurrentVariables & OpenMeteoForecastDailyListItem,
): CurrentDayConditionCardProps => ({
  fullDateLabel: formatOpenMeteoValue.fullDate(params.time),
  ConditionIcon: getWeatherCardIcon(params.weather_code, params.is_day),
  sunriseTimeLabel: formatOpenMeteoValue.fullTime(params.sunrise),
  sunsetTimeLabel: formatOpenMeteoValue.fullTime(params.sunset),
});
