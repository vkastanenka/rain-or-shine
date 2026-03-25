import { z, type ZodRawShape } from "zod";
import type { GetForecastByCoordsParams } from "./types";

export const formatGetForecastByCoordsParams = (
  params: GetForecastByCoordsParams,
): GetForecastByCoordsParams => ({
  ...params,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

export const transformValuesShapeToUnitsShape = <T extends ZodRawShape>(
  shape: T,
) => {
  const mappedEntries = Object.keys(shape).map((key) => {
    // 'time' is the only constant across Open-Meteo responses
    if (key === "time") {
      return [key, z.string()];
    }

    // Every other data point in a *_units object is just a string representing
    // the unit of measure (e.g., "°C", "mm", "km/h")
    return [key, z.string().optional()];
  });

  return Object.fromEntries(mappedEntries) as {
    [K in keyof T]: K extends "time" ? z.ZodString : z.ZodOptional<z.ZodString>;
  };
};
