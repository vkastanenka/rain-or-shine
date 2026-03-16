import {
  getLocalityCardProps,
  getLocationCardProps,
  getRecentLocations,
  type LocalityCardProps,
  type ValidWeatherPathLocation,
} from "@/features";
import {
  type Locality,
  type GetForecastByCoordsParams,
  getForecastByCoordsOptions,
  getLocalityByCoordsOptions,
} from "@/services";
import { type RouterContext } from "@/types";

export const getForecastByCoordsParams = (
  place?: Locality | ValidWeatherPathLocation,
): GetForecastByCoordsParams | undefined => {
  return place
    ? {
        latitude: place.latitude,
        longitude: place.longitude,
        current: ["temperature_2m", "weather_code", "is_day"],
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    : undefined;
};

export const routeLoader = async ({ context }: { context: RouterContext }) => {
  const queryClient = context.queryClient;
  const recentLocations = getRecentLocations();

  // 1. Fetch current locality first as it is often the primary data point
  const currentLocality = await queryClient
    .fetchQuery(getLocalityByCoordsOptions())
    .catch(() => null);

  // 2. Prepare Current Locality Forecast
  let currentLocalityForecast = null;
  let currentLocalityCardParams: LocalityCardProps | null = null;

  if (currentLocality) {
    const params = getForecastByCoordsParams(currentLocality);
    currentLocalityForecast = await queryClient.fetchQuery(
      getForecastByCoordsOptions(params),
    );

    if (currentLocalityForecast) {
      currentLocalityCardParams = getLocalityCardProps(
        currentLocality,
        currentLocalityForecast,
      );
    }
  }

  // 3. Handle Recent Locations (Parallelized)
  let recentLocationsCardParams: LocalityCardProps[] = [];

  if (recentLocations?.length > 0) {
    // Taking the first 2 as "most recent" based on your .slice logic intent
    const mostRecentLocations = recentLocations.slice(0, 2);

    // Map locations to a list of Promises
    const forecastPromises = mostRecentLocations.map(async (loc) => {
      const params = getForecastByCoordsParams(loc);
      try {
        // Assuming you have a function to get options by name/ID for recent items
        const forecast = await queryClient.fetchQuery(
          getForecastByCoordsOptions(params),
        );

        // Return the formatted card params if forecast exists
        return forecast ? getLocationCardProps(loc, forecast) : null;
      } catch (error) {
        console.error(`Failed to fetch forecast for ${loc.name}`, error);
        return null;
      }
    });

    // Execute all requests in parallel
    const results = await Promise.all(forecastPromises);

    // Filter out any nulls from failed requests or missing forecasts
    recentLocationsCardParams = results.filter((params) => params !== null);
  }

  return {
    currentLocality,
    currentLocalityForecast,
    currentLocalityCardParams,
    recentLocations,
    recentLocationsCardParams, // Now available to your route
  };
};
