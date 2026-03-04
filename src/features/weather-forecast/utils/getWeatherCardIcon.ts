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
  MoonFirstQuarter,
  MoonFull,
  MoonLastQuarter,
  MoonNew,
  MoonWaningCrescent,
  MoonWaningGibbous,
  MoonWaxingCrescent,
  MoonWaxingGibbous,
  Sunrise,
  Sunset,
  ClearDay,
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
  type OpenMeteoStringVar,
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

const getMoonPhaseIcon = () => {
  const date = new Date();
  const LUNAR_MONTH = 29.530588853;
  const referenceDate = new Date(2000, 0, 6, 12, 24, 1);

  const totalDays = (date.getTime() - referenceDate.getTime()) / 86400000;
  const age = ((totalDays % LUNAR_MONTH) + LUNAR_MONTH) % LUNAR_MONTH;

  // Divide the month into 8 equal segments (0-7)
  const phaseIndex = Math.floor((age / LUNAR_MONTH) * 8 + 0.5) % 8;

  const icons = [
    MoonNew, // 0
    MoonWaxingCrescent, // 1
    MoonFirstQuarter, // 2
    MoonWaxingGibbous, // 3
    MoonFull, // 4
    MoonWaningGibbous, // 5
    MoonLastQuarter, // 6
    MoonWaningCrescent, // 7
  ];

  return icons[phaseIndex];
};

export const getCelestialIcon = (
  sunrise: OpenMeteoStringVar,
  sunset: OpenMeteoStringVar,
) => {
  if (
    sunrise === undefined ||
    sunset === undefined ||
    sunrise === null ||
    sunset === null
  ) {
    return ClearDay;
  }

  const now = new Date().getTime();
  const rise = new Date(sunrise).getTime();
  const set = new Date(sunset).getTime();

  if (now < rise || now > set) return getMoonPhaseIcon(); // Night time

  const totalDaylight = set - rise;
  const progress = ((now - rise) / totalDaylight) * 100;

  if (progress < 15) return Sunrise; // Your 6-9 range
  if (progress < 30) return ClearDay; // Your 9-12 range
  if (progress < 70) return ClearDay; // High Noon
  if (progress < 85) return Sunset; // Your 18-12 range
  return Sunset;
};
