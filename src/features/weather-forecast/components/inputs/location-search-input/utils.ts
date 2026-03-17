import { type Location } from "@/services";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

/**
 * TODO: Move
 */

export const locationHasValidPath = (
  loc: Location,
): loc is ValidWeatherPathLocation => {
  return !!(loc.country_code && loc.admin1 && loc.name);
};

/**
 *
 */

