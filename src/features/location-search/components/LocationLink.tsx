import { Link } from "@tanstack/react-router";
import { Text } from "@/components";
import {
  formatWeatherUrlPath,
  FORECAST_PERIOD_MAP,
} from "@/features/weather-forecast";
import { useSearchActions } from "../hooks";
import type { LocationLinkProps } from "../types";

export const LocationLink = ({ location }: LocationLinkProps) => {
  const { handleSelectLocation } = useSearchActions();

  const path = formatWeatherUrlPath({
    countryName: location.country,
    region: location.admin1,
    city: location.name,
    period: FORECAST_PERIOD_MAP.current,
    longitude: location.longitude,
    latitude: location.latitude,
  });

  const handleClick = () => {
    handleSelectLocation(location);
  };

  return (
    <Link
      to={path}
      className="text-input-suggestions-item"
      onClick={handleClick}
    >
      <Text type={{ base: "body1", sm: "large" }} className="font-medium">
        {location.name}
      </Text>
      <Text type={{ base: "body2", sm: "body1" }} className="opacity-70">
        {location.admin1}, {location.country}
      </Text>
    </Link>
  );
};
