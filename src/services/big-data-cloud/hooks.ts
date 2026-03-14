import { useQuery, queryOptions } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { bigDataCloudService } from "./service";
import { type LocalityByCoordsParams } from "./types";

export const getLocalityByCoordsOptions = (params?: LocalityByCoordsParams) =>
  queryOptions({
    queryKey: queryKeys.localityByCoords(params),
    queryFn: ({ signal }) =>
      bigDataCloudService.getLocalityByCoords(params, { signal }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });

export const useGetLocalityByCoords = (params?: LocalityByCoordsParams) => {
  return useQuery(getLocalityByCoordsOptions(params));
};
