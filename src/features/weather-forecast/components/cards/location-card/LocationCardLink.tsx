import { ButtonLink } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { LocationCard } from "./LocationCard";
import { getLocationCardProps } from "./utils";

export const LocationCardLink = ({
  countryName,
  region,
  city,
  period,
  longitude,
  latitude,
  weatherCode,
  isDay,
  temperature,
  temperatureUnit,
  className,
}: any) => {
  const path = formatWeatherUrlPath({
    countryName,
    region,
    city,
    period,
    longitude,
    latitude,
  });

  const cardProps = getLocationCardProps({
    countryName,
    region,
    city,
    weatherCode,
    isDay,
    temperature,
    temperatureUnit,
  });

  return (
    <ButtonLink unstyled to={path} className={className}>
      <LocationCard
        isHover3d
        city={cardProps.city}
        region={cardProps.region}
        iconConfig={cardProps.iconConfig}
        temperature={cardProps.temperature}
      />
    </ButtonLink>
  );
};
