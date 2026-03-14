import { type LocalityByCoordsParams } from "./types";

export const queryKeys = {
  all: ["data"] as const,
  localityByCoords: (params?: LocalityByCoordsParams) =>
    [...queryKeys.all, "locality-by-coords", params] as const,
};
