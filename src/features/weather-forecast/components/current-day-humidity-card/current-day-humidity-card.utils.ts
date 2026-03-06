import {
  formatOpenMeteoValue,
  type OpenMeteoForecastCurrentVariables,
} from "@/entities";
import type { CurrentDayHumidityCardProps } from "./current-day-humidity-card.types";

export const getCurrentDayHumidityCardProps = (
  params: OpenMeteoForecastCurrentVariables,
): CurrentDayHumidityCardProps => {
  return {
    humidityLabel: formatOpenMeteoValue.humidity(
      params.relative_humidity_2m ?? 0,
    ),
    humidity: params.relative_humidity_2m ?? 0,
  };
};
