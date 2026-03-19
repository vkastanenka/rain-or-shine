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
    countryCode: location.country_code,
    region: location.admin1,
    city: location.name,
    period: FORECAST_PERIOD_MAP.current,
  });

  const handleClick = () => {
    handleSelectLocation(location);
  };

  return (
    <Link to={path} className="input-suggestions-item" onClick={handleClick}>
      <Text type="large" className="font-medium">
        {location.name}
      </Text>
      <Text className="opacity-70">
        {location.admin1}, {location.country}
      </Text>
    </Link>
  );
};
