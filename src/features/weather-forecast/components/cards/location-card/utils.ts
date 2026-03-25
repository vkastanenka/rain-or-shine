import {
  formatText,
  formatCommaSeparatedText,
  formatValueWithUnit,
  formatWmoIconConfig,
} from "@/features/weather-forecast/utils";
import type { GetLocationCardPropsParams, LocationCardProps } from "./types";

export const getLocationCardProps = ({
  countryName,
  region,
  city,
  weatherCode,
  isDay,
  temperature,
  temperatureUnit,
}: GetLocationCardPropsParams): LocationCardProps => ({
  city: formatText(city),
  region: formatCommaSeparatedText([region, countryName]),
  iconConfig: formatWmoIconConfig(weatherCode, isDay),
  temperature: formatValueWithUnit(temperature, temperatureUnit),
});
