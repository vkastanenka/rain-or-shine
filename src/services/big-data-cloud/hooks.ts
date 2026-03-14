import { useQuery, queryOptions } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { bigDataCloudService } from "./service";
import { type LocationByCoordsParams } from "./types";

export const getLocationByCoordsOptions = (params?: LocationByCoordsParams) =>
  queryOptions({
    queryKey: queryKeys.byCoords(params),
    queryFn: ({ signal }) =>
      bigDataCloudService.getLocationByCoords(params, { signal }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

export const useGetLocationByCoords = (params?: LocationByCoordsParams) => {
  return useQuery(getLocationByCoordsOptions(params));
};
