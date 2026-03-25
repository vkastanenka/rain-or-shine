import type { QueryClient } from "@tanstack/react-query";
import {
  formatGetForecastByCoordsParams,
  getForecastByCoordsOptions,
  getLocalityByCoordsOptions,
  STORAGE_KEY_MAP,
  type GetForecastByCoordsParams,
  type LocalStorageManager,
} from "@/services";
import type { RootRouterContext } from "@/routes/__root";

export const formatCurrentForecastParams = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): GetForecastByCoordsParams | undefined => {
  return formatGetForecastByCoordsParams({
    latitude,
    longitude,
    current: ["temperature_2m", "weather_code", "is_day"],
  });
};

const prepareCurrentLocalityForecast = async (queryClient: QueryClient) => {
  // Fetch current locality for forecast (Synchronous)
  const currentLocality = await queryClient
    .fetchQuery(getLocalityByCoordsOptions())
    .catch(() => undefined);

  // Fetch current locality forecast (Asynchronous)
  if (currentLocality) {
    const { latitude, longitude } = currentLocality;
    const params = formatCurrentForecastParams({ latitude, longitude });
    queryClient.prefetchQuery(getForecastByCoordsOptions(params));
  }

  return currentLocality;
};

const prepareRecentLocationsForecasts = (
  queryClient: QueryClient,
  local: LocalStorageManager,
) => {
  const recentLocations =
    local.get(STORAGE_KEY_MAP.recentLocations)?.slice(0, 2) ?? [];

  // Fetch recent locations forecasts (Asynchronous)
  recentLocations.forEach((loc) => {
    const { latitude, longitude } = loc;
    const params = formatCurrentForecastParams({ latitude, longitude });
    queryClient.prefetchQuery(getForecastByCoordsOptions(params));
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
