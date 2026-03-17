import type { Location, ValidWeatherPathLocation } from "./types";

export const locationHasValidPath = (
  loc: Location,
): loc is ValidWeatherPathLocation => {
  return !!(loc.country_code && loc.admin1 && loc.name);
};
