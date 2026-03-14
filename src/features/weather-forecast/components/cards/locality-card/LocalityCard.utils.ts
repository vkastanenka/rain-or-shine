import { type Locality, type Forecast } from "@/services";
import {
  formatText,
  formatCommaSeparatedText,
  formatValueWithUnit,
  formatWmoIcon,
} from "@/features/weather-forecast/utils";
import { type LocalityCardProps } from "./LocalityCard.types";

export const getLocalityCardProps = (
  locality?: Locality,
  forecast?: Forecast,
): LocalityCardProps => ({
  city: formatText(locality?.city),
  region: formatCommaSeparatedText([locality?.locality, locality?.countryName]),
  WmoIcon: formatWmoIcon(
    forecast?.current?.weather_code,
    forecast?.current?.is_day,
  ),
  temperature: formatValueWithUnit(
    forecast?.current?.temperature_2m,
    forecast?.current_units?.temperature_2m,
  ),
});
