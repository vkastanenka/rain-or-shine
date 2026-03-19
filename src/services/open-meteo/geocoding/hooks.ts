import {
  useQuery,
  queryOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { geocodingService } from "./service";
import { type GetLocationsByNameParams, type Locations } from "./types";
import { locationHasValidPath } from "./utils";

export const getLocationsByNameOptions = (
  params: GetLocationsByNameParams,
  options?: Partial<UseQueryOptions<Locations>>,
) => {
  return queryOptions({
    queryKey: queryKeys.search(params),
    queryFn: ({ signal }) =>
      geocodingService.getLocationsByName(params, { signal }),
    enabled: options?.enabled,
    select: (data) => {
      return {
        ...data,
        results: data.results?.filter(locationHasValidPath) ?? [],
      };
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetLocationsByName = (
  params: GetLocationsByNameParams,
  options?: Partial<UseQueryOptions<Locations>>,
) => {
  return useQuery(getLocationsByNameOptions(params, options));
};
