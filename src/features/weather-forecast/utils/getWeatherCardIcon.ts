import { Rain, Snowflake } from "@/assets/icons/meteocons/fill";
import {
  WMO_SNOW_CODES_MAP,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  isWmoCodeRain,
  isWmoCodeSnow,
  type OpenMeteoIsDayValue,
  type WmoCodesMapKey,
} from "@/entities";
import { type IconProps } from "@/components";

type WeatherIcon = React.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export const getWeatherCardIcon = (
  weatherCodeMapKey: WmoCodesMapKey,
  isDay: OpenMeteoIsDayValue,
): WeatherIcon => {
  const iconMap = isDay
    ? WMO_CODES_DAY_ICONS_FILL_MAP
    : WMO_CODES_NIGHT_ICONS_FILL_MAP;

  return iconMap[weatherCodeMapKey] || iconMap[0];
};

export const getWeatherCardPrecipitationAmountIcon = (
  weatherCodeMapKey: WmoCodesMapKey,
  precipitation: number,
): WeatherIcon | undefined => {
  if (precipitation <= 0) return;
  if (isWmoCodeRain(weatherCodeMapKey)) return Rain;
  if (isWmoCodeSnow(weatherCodeMapKey)) return Snowflake;
};

export const getWeatherCardPrecipitationProbabilityIcon = (
  weatherCodeMapKey: WmoCodesMapKey,
): WeatherIcon => {
  if (weatherCodeMapKey in WMO_SNOW_CODES_MAP) return Snowflake;
  return Rain;
};
