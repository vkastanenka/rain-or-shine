import { useQuery, queryOptions } from "@tanstack/react-query";
import { weatherForecastService } from "./service";
import { type GetForecastByCoordsParams } from "./types";

const forecastKeys = {
  all: ["forecast"] as const,
  byCoords: (params: GetForecastByCoordsParams) =>
    [...forecastKeys.all, "by-coords", params] as const,
};

export const getForecastByCoordsOptions = (params: GetForecastByCoordsParams) =>
  queryOptions({
    queryKey: forecastKeys.byCoords(params),
    queryFn: ({ signal }) =>
      weatherForecastService.getForecastByCoords(params, { signal }),
    enabled: !!params.latitude && !!params.longitude,
    staleTime: 1000 * 60,
    placeholderData: (previousData) => previousData,
  });

export const useGetForecastByCoords = (params: GetForecastByCoordsParams) => {
  return useQuery(getForecastByCoordsOptions(params));
};
