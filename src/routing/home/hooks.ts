import { useQueries } from "@tanstack/react-query";
import { type Locality, type ValidWeatherPathLocation } from "@/services";
import { formatCurrentForecastQuery } from "./utils";

export const useCurrentForecastQueries = (
  locations: (Locality | ValidWeatherPathLocation)[],
) => {
  const queries = locations.map((location) =>
    formatCurrentForecastQuery(location),
  );
  return useQueries({ queries });
};
