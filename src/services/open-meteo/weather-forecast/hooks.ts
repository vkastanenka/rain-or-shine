import { useQuery, queryOptions } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { weatherForecastService } from "./service";
import { type GetForecastByCoordsParams } from "./types";

export const getForecastByCoordsOptions = (params: GetForecastByCoordsParams) =>
  queryOptions({
    queryKey: queryKeys.byCoords(params),
    queryFn: ({ signal }) =>
      weatherForecastService.getForecastByCoords(params, { signal }),
    enabled: !!params.latitude && !!params.longitude,
    staleTime: 1000 * 60,
    placeholderData: (previousData) => previousData,
  });

export const useGetForecastByCoords = (params: GetForecastByCoordsParams) => {
  return useQuery(getForecastByCoordsOptions(params));
};
