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
  0: { lib: "fill", name: "ClearDay" },
  1: { lib: "fill", name: "ClearDay" },
  2: { lib: "fill", name: "PartlyCloudyDay" },
  3: { lib: "fill", name: "Overcast" },
  45: { lib: "fill", name: "FogDay" },
  48: { lib: "fill", name: "FogDay" },
  51: { lib: "fill", name: "Drizzle" },
  53: { lib: "fill", name: "Drizzle" },
  55: { lib: "fill", name: "Drizzle" },
  56: { lib: "fill", name: "Sleet" },
  57: { lib: "fill", name: "Sleet" },
  61: { lib: "fill", name: "Rain" },
  63: { lib: "fill", name: "Rain" },
  65: { lib: "fill", name: "Rain" },
  66: { lib: "fill", name: "Sleet" },
  67: { lib: "fill", name: "Sleet" },
  71: { lib: "fill", name: "Snow" },
  73: { lib: "fill", name: "Snow" },
  75: { lib: "fill", name: "Snow" },
  77: { lib: "fill", name: "Snowflake" },
  80: { lib: "fill", name: "PartlyCloudyDayRain" },
  81: { lib: "fill", name: "PartlyCloudyDayRain" },
  82: { lib: "fill", name: "Rain" },
  85: { lib: "fill", name: "PartlyCloudyDaySnow" },
  86: { lib: "fill", name: "Snow" },
  95: { lib: "fill", name: "Thunderstorms" },
  96: { lib: "fill", name: "ThunderstormsRain" },
  99: { lib: "fill", name: "ThunderstormsRain" },
} as const;

export const WMO_CODE_DAY_ICON_LINE_MAP = {
  0: { lib: "line", name: "ClearDay" },
  1: { lib: "line", name: "ClearDay" },
  2: { lib: "line", name: "PartlyCloudyDay" },
  3: { lib: "line", name: "Overcast" },
  45: { lib: "line", name: "FogDay" },
  48: { lib: "line", name: "FogDay" },
  51: { lib: "line", name: "Drizzle" },
  53: { lib: "line", name: "Drizzle" },
  55: { lib: "line", name: "Drizzle" },
  56: { lib: "line", name: "Sleet" },
  57: { lib: "line", name: "Sleet" },
  61: { lib: "line", name: "Rain" },
  63: { lib: "line", name: "Rain" },
  65: { lib: "line", name: "Rain" },
  66: { lib: "line", name: "Sleet" },
  67: { lib: "line", name: "Sleet" },
  71: { lib: "line", name: "Snow" },
  73: { lib: "line", name: "Snow" },
  75: { lib: "line", name: "Snow" },
  77: { lib: "line", name: "Snowflake" },
  80: { lib: "line", name: "PartlyCloudyDayRain" },
  81: { lib: "line", name: "PartlyCloudyDayRain" },
  82: { lib: "line", name: "Rain" },
  85: { lib: "line", name: "PartlyCloudyDaySnow" },
  86: { lib: "line", name: "Snow" },
  95: { lib: "line", name: "Thunderstorms" },
  96: { lib: "line", name: "ThunderstormsRain" },
  99: { lib: "line", name: "ThunderstormsRain" },
} as const;

export const WMO_CODE_NIGHT_ICON_FILL_MAP = {
  0: { lib: "fill", name: "ClearNight" },
  1: { lib: "fill", name: "ClearNight" },
  2: { lib: "fill", name: "PartlyCloudyNight" },
  3: { lib: "fill", name: "Overcast" },
  45: { lib: "fill", name: "FogNight" },
  48: { lib: "fill", name: "FogNight" },
  51: { lib: "fill", name: "Drizzle" },
  53: { lib: "fill", name: "Drizzle" },
  55: { lib: "fill", name: "Drizzle" },
  56: { lib: "fill", name: "Sleet" },
  57: { lib: "fill", name: "Sleet" },
  61: { lib: "fill", name: "Rain" },
  63: { lib: "fill", name: "Rain" },
  65: { lib: "fill", name: "Rain" },
  66: { lib: "fill", name: "Sleet" },
  67: { lib: "fill", name: "Sleet" },
  71: { lib: "fill", name: "Snow" },
  73: { lib: "fill", name: "Snow" },
  75: { lib: "fill", name: "Snow" },
  77: { lib: "fill", name: "Snowflake" },
  80: { lib: "fill", name: "PartlyCloudyNightRain" },
  81: { lib: "fill", name: "PartlyCloudyNightRain" },
  82: { lib: "fill", name: "Rain" },
  85: { lib: "fill", name: "PartlyCloudyNightSnow" },
  86: { lib: "fill", name: "Snow" },
  95: { lib: "fill", name: "Thunderstorms" },
  96: { lib: "fill", name: "ThunderstormsRain" },
  99: { lib: "fill", name: "ThunderstormsRain" },
} as const;

export const WMO_CODE_NIGHT_ICON_LINE_MAP = {
  0: { lib: "line", name: "ClearNight" },
  1: { lib: "line", name: "ClearNightFill" },
  2: { lib: "line", name: "PartlyCloudyNight" },
  3: { lib: "line", name: "Overcast" },
  45: { lib: "line", name: "FogNight" },
  48: { lib: "line", name: "FogNight" },
  51: { lib: "line", name: "Drizzle" },
  53: { lib: "line", name: "Drizzle" },
  55: { lib: "line", name: "Drizzle" },
  56: { lib: "line", name: "Sleet" },
  57: { lib: "line", name: "Sleet" },
  61: { lib: "line", name: "Rain" },
  63: { lib: "line", name: "Rain" },
  65: { lib: "line", name: "Rain" },
  66: { lib: "line", name: "Sleet" },
  67: { lib: "line", name: "Sleet" },
  71: { lib: "line", name: "Snow" },
  73: { lib: "line", name: "Snow" },
  75: { lib: "line", name: "Snow" },
  77: { lib: "line", name: "Snowflake" },
  80: { lib: "line", name: "PartlyCloudyNightRain" },
  81: { lib: "line", name: "PartlyCloudyNightRain" },
  82: { lib: "line", name: "Rain" },
  85: { lib: "line", name: "PartlyCloudyNightSnow" },
  86: { lib: "line", name: "Snow" },
  95: { lib: "line", name: "Thunderstorms" },
  96: { lib: "line", name: "ThunderstormsRain" },
  99: { lib: "line", name: "ThunderstormsRain" },
} as const;
