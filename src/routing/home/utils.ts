import type { QueryClient } from "@tanstack/react-query";
import {
  formatGetForecastByCoordsParams,
  getForecastByCoordsOptions,
  getLocalityByCoordsOptions,
  STORAGE_KEY_MAP,
  type Forecast,
  type Locality,
  type LocalStorageManager,
  type ValidWeatherPathLocation,
} from "@/services";
import type { RootRouterContext } from "@/routes/__root";
import type { QueryResult } from "@/types";

export const formatAllLocations = (
  currentLocality: Locality | undefined,
  recentLocations: ValidWeatherPathLocation[],
) => {
  const allLocations = [
    ...(currentLocality ? [currentLocality] : []),
    ...recentLocations,
  ];
  return allLocations;
};

export const formatAllForecasts = (
  currentLocality: Locality | undefined,
  forecasts: QueryResult<Forecast | undefined>[],
) => {
  const localityForecast = currentLocality ? forecasts[0] : undefined;
  const recentLocationsForecasts = currentLocality
    ? forecasts.slice(1)
    : forecasts;

  return { localityForecast, recentLocationsForecasts };
};

export const formatCurrentForecastQuery = (
  place: Locality | ValidWeatherPathLocation,
) => {
  const { latitude, longitude } = place;
  const params = formatGetForecastByCoordsParams({
    latitude,
    longitude,
    current: ["temperature_2m", "weather_code", "is_day"],
  });
  return getForecastByCoordsOptions(params);
};

const prepareCurrentLocalityForecast = async (
  queryClient: QueryClient,
): Promise<Locality | undefined> => {
  // Fetch current locality for forecast (Synchronous)
  const currentLocality = await queryClient
    .fetchQuery(getLocalityByCoordsOptions())
    .catch(() => undefined);

  // Fetch current locality forecast (Asynchronous)
  if (currentLocality) {
    const query = formatCurrentForecastQuery(currentLocality);
    queryClient.prefetchQuery(query);
  }

  return currentLocality;
};

const prepareRecentLocationsForecasts = (
  queryClient: QueryClient,
  local: LocalStorageManager,
): ValidWeatherPathLocation[] => {
  const recentLocations =
    local.get(STORAGE_KEY_MAP.recentLocations)?.slice(0, 2) ?? [];

  // Fetch recent locations forecasts (Asynchronous)
  recentLocations.forEach((location) => {
    const query = formatCurrentForecastQuery(location);
    queryClient.prefetchQuery(query);
  });

  return recentLocations;
};

export const routeLoader = async ({
  context,
}: {
  context: RootRouterContext;
}) => {
  const queryClient = context.queryClient;
  const local = context.storage.local;

  const currentLocality = await prepareCurrentLocalityForecast(queryClient);
  const recentLocations = prepareRecentLocationsForecasts(queryClient, local);

  return {
    currentLocality,
    recentLocations,
  };
};
