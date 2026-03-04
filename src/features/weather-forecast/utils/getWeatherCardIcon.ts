import {
  Rain,
  Snowflake,
  WindBeaufort0,
  WindBeaufort1,
  WindBeaufort2,
  WindBeaufort3,
  WindBeaufort4,
  WindBeaufort5,
  WindBeaufort6,
  WindBeaufort7,
  WindBeaufort8,
  WindBeaufort9,
  WindBeaufort10,
  WindBeaufort11,
  WindBeaufort12,
} from "@/assets/icons/meteocons/fill";
import {
  isWmoCodeRain,
  isWmoCodeSnow,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  WMO_SNOW_CODES_MAP,
  type OpenMeteoIsDayVariable,
  type OpenMeteoNumberVar,
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

const getBeaufortRank = (speed: number) => {
  if (speed < 1) return 0;
  if (speed < 6) return 1;
  if (speed < 12) return 2;
  if (speed < 20) return 3;
  if (speed < 29) return 4;
  if (speed < 39) return 5;
  if (speed < 50) return 6;
  if (speed < 62) return 7;
  if (speed < 75) return 8;
  if (speed < 89) return 9;
  if (speed < 103) return 10;
  if (speed < 118) return 11;
  return 12; // Hurricane force
};

const BEAUFORT_RANK_ICON_MAP = {
  0: WindBeaufort0,
  1: WindBeaufort1,
  2: WindBeaufort2,
  3: WindBeaufort3,
  4: WindBeaufort4,
  5: WindBeaufort5,
  6: WindBeaufort6,
  7: WindBeaufort7,
  8: WindBeaufort8,
  9: WindBeaufort9,
  10: WindBeaufort10,
  11: WindBeaufort11,
  12: WindBeaufort12,
};

export const getWindSpeedIcon = (speed: OpenMeteoNumberVar): IconComponent => {
  if (speed === undefined || speed === null) {
    return BEAUFORT_RANK_ICON_MAP[0];
  }
  const beaufortRank = getBeaufortRank(speed);
  return BEAUFORT_RANK_ICON_MAP[beaufortRank];
};
