import * as MeteoconsFill from "@/assets/icons/meteocons/fill";
import * as MeteoconsLine from "@/assets/icons/meteocons/line";

/**
 * WMO Code Types
 */

export const WMO_CODE_DESCRIPTION_MAP = {
  // Clear and Cloudy
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",

  // Fog
  45: "Fog",
  48: "Depositing rime fog",

  // Drizzle
  51: "Drizzle: Light intensity",
  53: "Drizzle: Moderate intensity",
  55: "Drizzle: Dense intensity",
  56: "Freezing Drizzle: Light intensity",
  57: "Freezing Drizzle: Dense intensity",

  // Rain
  61: "Rain: Slight intensity",
  63: "Rain: Moderate intensity",
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light intensity",
  67: "Freezing Rain: Heavy intensity",

  // Snow
  71: "Snow fall: Slight intensity",
  73: "Snow fall: Moderate intensity",
  75: "Snow fall: Heavy intensity",
  77: "Snow grains",

  // Showers
  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",
  85: "Snow showers: Slight",
  86: "Snow showers: Heavy",

  // Thunderstorm
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
} as const;

export const WMO_RAIN_CODE_DESCRIPTION_MAP = {
  51: WMO_CODE_DESCRIPTION_MAP[51],
  53: WMO_CODE_DESCRIPTION_MAP[53],
  55: WMO_CODE_DESCRIPTION_MAP[55],
  56: WMO_CODE_DESCRIPTION_MAP[56],
  57: WMO_CODE_DESCRIPTION_MAP[57],
  61: WMO_CODE_DESCRIPTION_MAP[61],
  63: WMO_CODE_DESCRIPTION_MAP[63],
  65: WMO_CODE_DESCRIPTION_MAP[65],
  66: WMO_CODE_DESCRIPTION_MAP[66],
  67: WMO_CODE_DESCRIPTION_MAP[67],
  80: WMO_CODE_DESCRIPTION_MAP[80],
  81: WMO_CODE_DESCRIPTION_MAP[81],
  82: WMO_CODE_DESCRIPTION_MAP[82],
  95: WMO_CODE_DESCRIPTION_MAP[95],
  96: WMO_CODE_DESCRIPTION_MAP[96],
  99: WMO_CODE_DESCRIPTION_MAP[99],
} as const;

export const WMO_SNOW_CODE_DESCRIPTION_MAP = {
  71: WMO_CODE_DESCRIPTION_MAP[71],
  73: WMO_CODE_DESCRIPTION_MAP[73],
  75: WMO_CODE_DESCRIPTION_MAP[75],
  77: WMO_CODE_DESCRIPTION_MAP[77],
  85: WMO_CODE_DESCRIPTION_MAP[85],
  86: WMO_CODE_DESCRIPTION_MAP[86],
} as const;

/**
 * Icon Map Types
 */

export const WMO_CODE_DAY_ICON_FILL_MAP = {
  0: MeteoconsFill.ClearDayFill,
  1: MeteoconsFill.ClearDayFill,
  2: MeteoconsFill.PartlyCloudyDayFill,
  3: MeteoconsFill.OvercastFill,
  45: MeteoconsFill.FogDayFill,
  48: MeteoconsFill.FogDayFill,
  51: MeteoconsFill.DrizzleFill,
  53: MeteoconsFill.DrizzleFill,
  55: MeteoconsFill.DrizzleFill,
  56: MeteoconsFill.SleetFill,
  57: MeteoconsFill.SleetFill,
  61: MeteoconsFill.RainFill,
  63: MeteoconsFill.RainFill,
  65: MeteoconsFill.RainFill,
  66: MeteoconsFill.SleetFill,
  67: MeteoconsFill.SleetFill,
  71: MeteoconsFill.SnowFill,
  73: MeteoconsFill.SnowFill,
  75: MeteoconsFill.SnowFill,
  77: MeteoconsFill.SnowflakeFill,
  80: MeteoconsFill.PartlyCloudyDayRainFill,
  81: MeteoconsFill.PartlyCloudyDayRainFill,
  82: MeteoconsFill.RainFill,
  85: MeteoconsFill.PartlyCloudyDaySnowFill,
  86: MeteoconsFill.SnowFill,
  95: MeteoconsFill.ThunderstormsFill,
  96: MeteoconsFill.ThunderstormsRainFill,
  99: MeteoconsFill.ThunderstormsRainFill,
} as const;

export const WMO_CODE_DAY_ICON_LINE_MAP = {
  0: MeteoconsLine.ClearDayLine,
  1: MeteoconsLine.ClearDayLine,
  2: MeteoconsLine.PartlyCloudyDayLine,
  3: MeteoconsLine.OvercastLine,
  45: MeteoconsLine.FogDayLine,
  48: MeteoconsLine.FogDayLine,
  51: MeteoconsLine.DrizzleLine,
  53: MeteoconsLine.DrizzleLine,
  55: MeteoconsLine.DrizzleLine,
  56: MeteoconsLine.SleetLine,
  57: MeteoconsLine.SleetLine,
  61: MeteoconsLine.RainLine,
  63: MeteoconsLine.RainLine,
  65: MeteoconsLine.RainLine,
  66: MeteoconsLine.SleetLine,
  67: MeteoconsLine.SleetLine,
  71: MeteoconsLine.SnowLine,
  73: MeteoconsLine.SnowLine,
  75: MeteoconsLine.SnowLine,
  77: MeteoconsLine.SnowflakeLine,
  80: MeteoconsLine.PartlyCloudyDayRainLine,
  81: MeteoconsLine.PartlyCloudyDayRainLine,
  82: MeteoconsLine.RainLine,
  85: MeteoconsLine.PartlyCloudyDaySnowLine,
  86: MeteoconsLine.SnowLine,
  95: MeteoconsLine.ThunderstormsLine,
  96: MeteoconsLine.ThunderstormsRainLine,
  99: MeteoconsLine.ThunderstormsRainLine,
} as const;

export const WMO_CODE_NIGHT_ICON_FILL_MAP = {
  0: MeteoconsFill.ClearNightFill,
  1: MeteoconsFill.ClearNightFill,
  2: MeteoconsFill.PartlyCloudyNightFill,
  3: MeteoconsFill.OvercastFill,
  45: MeteoconsFill.FogNightFill,
  48: MeteoconsFill.FogNightFill,
  51: MeteoconsFill.DrizzleFill,
  53: MeteoconsFill.DrizzleFill,
  55: MeteoconsFill.DrizzleFill,
  56: MeteoconsFill.SleetFill,
  57: MeteoconsFill.SleetFill,
  61: MeteoconsFill.RainFill,
  63: MeteoconsFill.RainFill,
  65: MeteoconsFill.RainFill,
  66: MeteoconsFill.SleetFill,
  67: MeteoconsFill.SleetFill,
  71: MeteoconsFill.SnowFill,
  73: MeteoconsFill.SnowFill,
  75: MeteoconsFill.SnowFill,
  77: MeteoconsFill.SnowflakeFill,
  80: MeteoconsFill.PartlyCloudyNightRainFill,
  81: MeteoconsFill.PartlyCloudyNightRainFill,
  82: MeteoconsFill.RainFill,
  85: MeteoconsFill.PartlyCloudyNightSnowFill,
  86: MeteoconsFill.SnowFill,
  95: MeteoconsFill.ThunderstormsFill,
  96: MeteoconsFill.ThunderstormsRainFill,
  99: MeteoconsFill.ThunderstormsRainFill,
} as const;

export const WMO_CODE_NIGHT_ICON_LINE_MAP = {
  0: MeteoconsLine.ClearNightLine,
  1: MeteoconsLine.ClearNightLine,
  2: MeteoconsLine.PartlyCloudyNightLine,
  3: MeteoconsLine.OvercastLine,
  45: MeteoconsLine.FogNightLine,
  48: MeteoconsLine.FogNightLine,
  51: MeteoconsLine.DrizzleLine,
  53: MeteoconsLine.DrizzleLine,
  55: MeteoconsLine.DrizzleLine,
  56: MeteoconsLine.SleetLine,
  57: MeteoconsLine.SleetLine,
  61: MeteoconsLine.RainLine,
  63: MeteoconsLine.RainLine,
  65: MeteoconsLine.RainLine,
  66: MeteoconsLine.SleetLine,
  67: MeteoconsLine.SleetLine,
  71: MeteoconsLine.SnowLine,
  73: MeteoconsLine.SnowLine,
  75: MeteoconsLine.SnowLine,
  77: MeteoconsLine.SnowflakeLine,
  80: MeteoconsLine.PartlyCloudyNightRainLine,
  81: MeteoconsLine.PartlyCloudyNightRainLine,
  82: MeteoconsLine.RainLine,
  85: MeteoconsLine.PartlyCloudyNightSnowLine,
  86: MeteoconsLine.SnowLine,
  95: MeteoconsLine.ThunderstormsLine,
  96: MeteoconsLine.ThunderstormsRainLine,
  99: MeteoconsLine.ThunderstormsRainLine,
} as const;
