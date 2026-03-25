import { useQueries } from "@tanstack/react-query";
import {
  getForecastByCoordsOptions,
  type Locality,
  type ValidWeatherPathLocation,
} from "@/services";
import { formatCurrentForecastParams } from "./utils";

export const useForecastQueries = (
  locations: (Locality | ValidWeatherPathLocation)[],
) => {
  const results = useQueries({
    queries: locations.map((loc) => {
      const { latitude, longitude } = loc;
      const params = formatCurrentForecastParams({ latitude, longitude });
      return getForecastByCoordsOptions(params);
    }),
  });
  return results;
};
