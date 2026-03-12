import { useQuery, queryOptions } from "@tanstack/react-query";
import { bigDataCloudService } from "./service";
import { type LocationByCoordsParams } from "./types";

const locationKeys = {
  all: ["location"] as const,
  byCoords: (params?: LocationByCoordsParams) =>
    [...locationKeys.all, "by-coords", params] as const,
};

export const locationByCoordsOptions = (params?: LocationByCoordsParams) =>
  queryOptions({
    queryKey: locationKeys.byCoords(params),
    queryFn: ({ signal }) =>
      bigDataCloudService.getLocationByCoords(params, { signal }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

export const useGetLocationByCoords = (params?: LocationByCoordsParams) => {
  return useQuery(locationByCoordsOptions(params));
};
