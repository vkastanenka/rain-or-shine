import { type Location } from "@/services";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

export const locationHasValidPath = (loc: Location): loc is ValidWeatherPathLocation => {
  return !!(loc.country_code && loc.admin1 && loc.name);
};

export const onInputFocus = (
  query: string,
  results: Location[],
  isLoading: boolean,
  callbackFn: () => void,
) => {
  if (query.length >= 2 && (results.length > 0 || isLoading)) {
    callbackFn();
  }
};
