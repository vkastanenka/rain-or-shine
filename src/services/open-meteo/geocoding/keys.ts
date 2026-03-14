import { type GetLocationsByNameParams } from "./types";

export const queryKeys = {
  all: ["geocoding"] as const,
  search: (params?: GetLocationsByNameParams) =>
    [...queryKeys.all, "search", params] as const,
};
