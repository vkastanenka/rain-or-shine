import {
  useQuery,
  queryOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { geocodingService } from "./service";
import { type GetLocationsByNameParams } from "./types";

export const getLocationsByNameOptions = (params: GetLocationsByNameParams) => {
  const searchTerm = params.name.trim();
  return queryOptions({
    queryKey: queryKeys.search(params),
    queryFn: ({ signal }) =>
      geocodingService.getLocationsByName(params, { signal }),
    enabled: searchTerm.length >= 2,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};

export const useGetLocationsByName = (params: GetLocationsByNameParams) => {
  return useQuery(getLocationsByNameOptions(params));
};
