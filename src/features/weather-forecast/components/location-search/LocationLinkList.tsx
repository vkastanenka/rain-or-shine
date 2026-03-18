import { Link } from "@tanstack/react-router";
import { Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { type ValidWeatherPathLocation } from "@/services";
import { useSearchActions } from "./hooks";

const LocationLink = ({ location }: { location: ValidWeatherPathLocation }) => {
  const { handleSelectLocation } = useSearchActions();

  const path = formatWeatherUrlPath(
    location.country_code,
    location.admin1,
    location.name,
    FORECAST_PERIOD_MAP.current,
  );

  const handleClick = () => {
    handleSelectLocation(location);
  };

  return (
    <Link to={path} className="input-suggestions-link" onClick={handleClick}>
      <Text type="large" className="font-medium">
        {location.name}
      </Text>
      <Text className="opacity-70">
        {location.admin1}, {location.country}
      </Text>
    </Link>
  );
};

export const LocationLinkList = ({
  locations,
}: {
  locations: ValidWeatherPathLocation[];
}) => {
  return (
    <ul>
      {locations.map((loc) => (
        <li key={loc.id}>
          <LocationLink location={loc} />
        </li>
      ))}
    </ul>
  );
};
