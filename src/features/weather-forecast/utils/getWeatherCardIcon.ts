import { Rain, Snowflake } from "@/assets/icons/meteocons/fill";
import { type IconProps } from "@/components";
import {
  WMO_RAIN_CODES_MAP,
  WMO_SNOW_CODES_MAP,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  type WmoCodesMapKey,
} from "@/entities";

type WeatherIcon = React.ForwardRefExoticComponent<
  Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export const getWeatherCardIcon = (
  weatherCodeMapKey: WmoCodesMapKey,
  isDay: 0 | 1,
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
  if (weatherCodeMapKey in WMO_RAIN_CODES_MAP) return Rain;
  if (weatherCodeMapKey in WMO_SNOW_CODES_MAP) return Snowflake;
};

export const getWeatherCardPrecipitationProbabilityIcon = (
  weatherCodeMapKey: WmoCodesMapKey,
): WeatherIcon => {
  if (weatherCodeMapKey in WMO_SNOW_CODES_MAP) return Snowflake;
  return Rain;
};
