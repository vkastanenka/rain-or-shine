import { useQuery, queryOptions } from "@tanstack/react-query";
import { bigDataCloudService } from "@/services";
import { type LocationCoordsParams } from "./types";

export const locationKeys = {
  all: ["location"] as const,
  byCoords: (params?: LocationCoordsParams) =>
    [...locationKeys.all, "by-coords", params] as const,
};

export const locationByCoordsOptions = (params?: LocationCoordsParams) =>
  queryOptions({
    queryKey: locationKeys.byCoords(params),
    queryFn: ({ signal }) =>
      bigDataCloudService.getLocationByCoords(params, { signal }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

export const useGetLocationByCoords = (params?: LocationCoordsParams) => {
  return useQuery(locationByCoordsOptions(params));
};
