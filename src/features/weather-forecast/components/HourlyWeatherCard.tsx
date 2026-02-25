import { Flex, Text } from "@/components";
import {
  formatOpenMeteoValue,
  type OpenMeteoForecastHourlyListItem,
} from "@/entities";
import {
  getWeatherCardIcon,
  getWeatherCardPrecipitationProbabilityIcon,
} from "../utils";
import { WeatherCardPrecipitationScale } from "./WeatherCardPrecipitationScale";

export const HourlyWeatherCard = ({
  apparent_temperature = 0,
  is_day = 1,
  precipitation_probability = 0,
  precipitation = 0,
  temperature_2m = 0,
  time,
  weather_code = 0,
  ...props
}: OpenMeteoForecastHourlyListItem) => {
  const MainIcon = getWeatherCardIcon(weather_code, is_day);
  const PrecipitationProbabilityIcon =
    getWeatherCardPrecipitationProbabilityIcon(weather_code);

  return (
    <div className="bg-mauve-700 rounded-lg pt-3 overflow-hidden" {...props}>
      <Flex
        direction={{ base: "col" }}
        align={{ base: "center" }}
        justify={{ base: "between" }}
        gap={4}
        className="w-full h-full"
      >
        <Flex
          direction={{ base: "col" }}
          align={{ base: "center" }}
          className="w-full"
        >
          <Text>{formatOpenMeteoValue.hourlyTime(time)}</Text>
          <MainIcon size={48} />
          <Text type="headline4">
            {formatOpenMeteoValue.temperature(temperature_2m)}
          </Text>
          <Text type="caption">
            {formatOpenMeteoValue.apparentTemperature(apparent_temperature)}
          </Text>
          <Flex gap={1}>
            <PrecipitationProbabilityIcon />
            <Text>
              {formatOpenMeteoValue.precipitationProbability(
                precipitation_probability,
              )}
            </Text>
          </Flex>
        </Flex>

        <WeatherCardPrecipitationScale
          precipitation={precipitation}
          weatherCode={weather_code}
        />
      </Flex>
    </div>
  );
};
