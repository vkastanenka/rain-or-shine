import { type GetForecastByCoordsParams } from "./types";

export const queryKeys = {
  all: ["forecast"] as const,
  byCoords: (params?: GetForecastByCoordsParams) =>
    [...queryKeys.all, "by-coords", params] as const,
};
