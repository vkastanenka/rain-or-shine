import { type LocationByCoordsParams } from "./types";

export const queryKeys = {
  all: ["location"] as const,
  byCoords: (params?: LocationByCoordsParams) =>
    [...queryKeys.all, "by-coords", params] as const,
};
