import type { Locality, GetForecastByCoordsParams } from "@/services";

export const getForecastByCoordsParams = (
  locality?: Locality,
): GetForecastByCoordsParams | undefined => {
  return locality
    ? {
        latitude: locality.latitude,
        longitude: locality.longitude,
        current: ["temperature_2m", "weather_code", "is_day"],
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    : undefined;
};
