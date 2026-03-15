import { type Location } from "@/services";
import { getRecentLocations } from "@/features/weather-forecast/utils";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

export const locationHasValidPath = (
  loc: Location,
): loc is ValidWeatherPathLocation => {
  return !!(loc.country_code && loc.admin1 && loc.name);
};

export const onInputFocus = (
  query: string,
  results: Location[],
  isLoading: boolean,
  callbackFn: () => void,
) => {
  const recentLocations = getRecentLocations();
  if (
    recentLocations.length > 0 ||
    (query.length >= 0 && (results.length > 0 || isLoading))
  ) {
    callbackFn();
  }
};
