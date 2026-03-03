import { Rain, Snowflake } from "@/assets/icons/meteocons/fill";
import {
  isWmoCodeRain,
  isWmoCodeSnow,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  WMO_SNOW_CODES_MAP,
  type OpenMeteoIsDayVariable,
  type OpenMeteoPrecipitationVariable,
  type OpenMeteoWeatherCodeVariable,
} from "@/entities";
import { type IconComponent } from "@/components";

export const getWeatherCardIcon = (
  weatherCode: OpenMeteoWeatherCodeVariable = 0,
  isDay: OpenMeteoIsDayVariable = 1,
): IconComponent => {
  const iconMap = isDay
    ? WMO_CODES_DAY_ICONS_FILL_MAP
    : WMO_CODES_NIGHT_ICONS_FILL_MAP;

  return iconMap[weatherCode || 0];
};

export const getWeatherCardPrecipitationAmountIcon = (
  weatherCode: OpenMeteoWeatherCodeVariable = 0,
  precipitation: OpenMeteoPrecipitationVariable = 0,
): IconComponent | undefined => {
  if (!precipitation || precipitation <= 0) {
    return;
  }

  if (!weatherCode || isWmoCodeRain(weatherCode)) {
    return Rain;
  }

  if (isWmoCodeSnow(weatherCode)) return Snowflake;
};

export const getWeatherCardPrecipitationProbabilityIcon = (
  weatherCode: OpenMeteoWeatherCodeVariable = 0,
): IconComponent => {
  if (!weatherCode || !(weatherCode in WMO_SNOW_CODES_MAP)) {
    return Rain;
  }

  return Snowflake;
};
