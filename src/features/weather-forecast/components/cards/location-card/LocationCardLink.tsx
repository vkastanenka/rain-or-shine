import { ButtonLink } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { LocationCard } from "./LocationCard";
import { getLocationCardProps } from "./utils";
import type { Forecast, Locality, ValidWeatherPathLocation } from "@/services";
import type { QueryResult } from "@/types";
import type { ForecastPeriodMapKey } from "@/features/weather-forecast/types";

export const LocationCardLink = ({
  place,
  forecast,
  period,
  className,
}: {
  place: Locality | ValidWeatherPathLocation;
  forecast: QueryResult<Forecast | undefined>;
  period: ForecastPeriodMapKey;
  className?: string;
}) => {
  const placeIsLocality = "countryName" in place;
  const countryName = placeIsLocality ? place.countryName : place.country;
  const region = placeIsLocality ? place.locality : place.admin1;
  const city = placeIsLocality ? place.city : place.name;
  const { longitude, latitude } = place;

  const path = formatWeatherUrlPath({
    countryName,
    region,
    city,
    period,
    longitude,
    latitude,
  });

  const { data } = forecast;
  const currentForecastData = data?.current;
  const currentForecastUnits = data?.current_units;

  const cardProps = getLocationCardProps({
    countryName,
    region,
    city,
    weatherCode: currentForecastData?.weather_code,
    isDay: currentForecastData?.is_day,
    temperature: currentForecastData?.temperature_2m,
    temperatureUnit: currentForecastUnits?.temperature_2m,
  });

  return (
    <ButtonLink  unstyled to={path} className={className}>
      <LocationCard
        city={cardProps.city}
        region={cardProps.region}
        iconConfig={cardProps.iconConfig}
        temperature={cardProps.temperature}
      />
    </ButtonLink>
  );
};
