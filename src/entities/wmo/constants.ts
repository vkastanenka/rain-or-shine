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
  0: MeteoconsFill.ClearDay,
  1: MeteoconsFill.ClearDay,
  2: MeteoconsFill.PartlyCloudyDay,
  3: MeteoconsFill.Overcast,
  45: MeteoconsFill.FogDay,
  48: MeteoconsFill.FogDay,
  51: MeteoconsFill.Drizzle,
  53: MeteoconsFill.Drizzle,
  55: MeteoconsFill.Drizzle,
  56: MeteoconsFill.Sleet,
  57: MeteoconsFill.Sleet,
  61: MeteoconsFill.Rain,
  63: MeteoconsFill.Rain,
  65: MeteoconsFill.Rain,
  66: MeteoconsFill.Sleet,
  67: MeteoconsFill.Sleet,
  71: MeteoconsFill.Snow,
  73: MeteoconsFill.Snow,
  75: MeteoconsFill.Snow,
  77: MeteoconsFill.Snowflake,
  80: MeteoconsFill.PartlyCloudyDayRain,
  81: MeteoconsFill.PartlyCloudyDayRain,
  82: MeteoconsFill.Rain,
  85: MeteoconsFill.PartlyCloudyDaySnow,
  86: MeteoconsFill.Snow,
  95: MeteoconsFill.Thunderstorms,
  96: MeteoconsFill.ThunderstormsRain,
  99: MeteoconsFill.ThunderstormsRain,
} as const;

export const WMO_CODE_DAY_ICON_LINE_MAP = {
  0: MeteoconsLine.ClearDay,
  1: MeteoconsLine.ClearDay,
  2: MeteoconsLine.PartlyCloudyDay,
  3: MeteoconsLine.Overcast,
  45: MeteoconsLine.FogDay,
  48: MeteoconsLine.FogDay,
  51: MeteoconsLine.Drizzle,
  53: MeteoconsLine.Drizzle,
  55: MeteoconsLine.Drizzle,
  56: MeteoconsLine.Sleet,
  57: MeteoconsLine.Sleet,
  61: MeteoconsLine.Rain,
  63: MeteoconsLine.Rain,
  65: MeteoconsLine.Rain,
  66: MeteoconsLine.Sleet,
  67: MeteoconsLine.Sleet,
  71: MeteoconsLine.Snow,
  73: MeteoconsLine.Snow,
  75: MeteoconsLine.Snow,
  77: MeteoconsLine.Snowflake,
  80: MeteoconsLine.PartlyCloudyDayRain,
  81: MeteoconsLine.PartlyCloudyDayRain,
  82: MeteoconsLine.Rain,
  85: MeteoconsLine.PartlyCloudyDaySnow,
  86: MeteoconsLine.Snow,
  95: MeteoconsLine.Thunderstorms,
  96: MeteoconsLine.ThunderstormsRain,
  99: MeteoconsLine.ThunderstormsRain,
} as const;

export const WMO_CODE_NIGHT_ICON_FILL_MAP = {
  0: MeteoconsFill.ClearNight,
  1: MeteoconsFill.ClearNight,
  2: MeteoconsFill.PartlyCloudyNight,
  3: MeteoconsFill.Overcast,
  45: MeteoconsFill.FogNight,
  48: MeteoconsFill.FogNight,
  51: MeteoconsFill.Drizzle,
  53: MeteoconsFill.Drizzle,
  55: MeteoconsFill.Drizzle,
  56: MeteoconsFill.Sleet,
  57: MeteoconsFill.Sleet,
  61: MeteoconsFill.Rain,
  63: MeteoconsFill.Rain,
  65: MeteoconsFill.Rain,
  66: MeteoconsFill.Sleet,
  67: MeteoconsFill.Sleet,
  71: MeteoconsFill.Snow,
  73: MeteoconsFill.Snow,
  75: MeteoconsFill.Snow,
  77: MeteoconsFill.Snowflake,
  80: MeteoconsFill.PartlyCloudyNightRain,
  81: MeteoconsFill.PartlyCloudyNightRain,
  82: MeteoconsFill.Rain,
  85: MeteoconsFill.PartlyCloudyNightSnow,
  86: MeteoconsFill.Snow,
  95: MeteoconsFill.Thunderstorms,
  96: MeteoconsFill.ThunderstormsRain,
  99: MeteoconsFill.ThunderstormsRain,
} as const;

export const WMO_CODE_NIGHT_ICON_LINE_MAP = {
  0: MeteoconsLine.ClearNight,
  1: MeteoconsLine.ClearNight,
  2: MeteoconsLine.PartlyCloudyNight,
  3: MeteoconsLine.Overcast,
  45: MeteoconsLine.FogNight,
  48: MeteoconsLine.FogNight,
  51: MeteoconsLine.Drizzle,
  53: MeteoconsLine.Drizzle,
  55: MeteoconsLine.Drizzle,
  56: MeteoconsLine.Sleet,
  57: MeteoconsLine.Sleet,
  61: MeteoconsLine.Rain,
  63: MeteoconsLine.Rain,
  65: MeteoconsLine.Rain,
  66: MeteoconsLine.Sleet,
  67: MeteoconsLine.Sleet,
  71: MeteoconsLine.Snow,
  73: MeteoconsLine.Snow,
  75: MeteoconsLine.Snow,
  77: MeteoconsLine.Snowflake,
  80: MeteoconsLine.PartlyCloudyNightRain,
  81: MeteoconsLine.PartlyCloudyNightRain,
  82: MeteoconsLine.Rain,
  85: MeteoconsLine.PartlyCloudyNightSnow,
  86: MeteoconsLine.Snow,
  95: MeteoconsLine.Thunderstorms,
  96: MeteoconsLine.ThunderstormsRain,
  99: MeteoconsLine.ThunderstormsRain,
} as const;
