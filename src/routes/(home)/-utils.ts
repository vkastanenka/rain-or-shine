import { getLocalityCardProps } from "@/features";
import {
  type Locality,
  type GetForecastByCoordsParams,
  getForecastByCoordsOptions,
  getLocalityByCoordsOptions,
} from "@/services";
import { type RouterContext } from "@/types";

export const getForecastByCoordsParams = (
  locality?: Locality,
): GetForecastByCoordsParams | undefined => {
  return locality
    ? {
        latitude: locality.latitude,
        longitude: locality.longitude,
        current: ["temperature_2m", "weather_code", "is_day"],
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    : undefined;
};

export const routeLoader = async ({ context }: { context: RouterContext }) => {
  const currentLocality = await context.queryClient
    .fetchQuery(getLocalityByCoordsOptions())
    .catch(() => null);

  let currentLocalityForecast = null;
  let currentLocalityCardParams = null;

  if (currentLocality) {
    const currentLocalityForecastParams =
      getForecastByCoordsParams(currentLocality);

    currentLocalityForecast = await context.queryClient.fetchQuery(
      getForecastByCoordsOptions(currentLocalityForecastParams),
    );

    if (currentLocalityForecast) {
      currentLocalityCardParams = getLocalityCardProps(
        currentLocality,
        currentLocalityForecast,
      );
    }
  }

  return {
    currentLocality,
    currentLocalityForecast,
    currentLocalityCardParams,
  };
};
