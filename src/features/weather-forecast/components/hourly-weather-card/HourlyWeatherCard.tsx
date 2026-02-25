import { Flex, Text } from "@/components";
import { cn } from "@/utils";
import { type OpenMeteoForecastHourlyListItem } from "@/entities";
import {
  calculateWeatherCardPrecipitationIndicatorHeight,
  getHourlyWeatherCardTime,
  getWeatherCardIcon,
  getWeatherCardPrecipitationAmountIcon,
  getWeatherCardPrecipitationProbabilityIcon,
} from "../../utils";

export const HourlyWeatherCard = ({
  apparent_temperature,
  is_day,
  precipitation_probability,
  precipitation,
  temperature_2m,
  time,
  weather_code,
  ...props
}: OpenMeteoForecastHourlyListItem) => {
  const formattedTime = getHourlyWeatherCardTime(time);
  const IconMain = getWeatherCardIcon(weather_code, is_day);
  const IconPrecipitationAmount = getWeatherCardPrecipitationAmountIcon(
    weather_code,
    precipitation,
  );
  const IconPrecipitationProbability =
    getWeatherCardPrecipitationProbabilityIcon(weather_code);
  const precipitationIndicatorHeight =
    calculateWeatherCardPrecipitationIndicatorHeight(precipitation);

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
          {/* Time */}
          <Text>{formattedTime}</Text>
          {/* Weather Code Icon */}
          <IconMain size={48} />
          {/* Temperature */}
          <Text type="headline4">{`${temperature_2m}°`}</Text>
          {/* Apparent Temperature */}
          <Text type="caption">{`Feel ${apparent_temperature}`}</Text>
          {/* Precipitation Coverage */}
          <Flex gap={1}>
            <IconPrecipitationProbability />
            <Text>{`${precipitation_probability}%`}</Text>
          </Flex>
        </Flex>

        {/* Precipitation Scale */}
        {precipitation > 0 && IconPrecipitationAmount ? (
          <Flex
            gap={1}
            direction={{ base: "col" }}
            align={{ base: "center" }}
            className="w-full"
          >
            <Flex gap={1}>
              {/* Precipitation Amount Icon */}
              <IconPrecipitationAmount />
              {/* Precipitation AMount */}
              <Text type="body2">{`${precipitation}mm`}</Text>
            </Flex>

            {/* Precipitation Amount Indicator */}
            <div className={cn("w-full", "opacity-80")}>
              <div className={cn("w-full", "h-0.5", "bg-neutral-50")}></div>
              <div
                className={cn("w-full", "bg-neutral-300")}
                style={{ height: `${precipitationIndicatorHeight}px` }}
              ></div>
            </div>
          </Flex>
        ) : null}
      </Flex>
    </div>
  );
};
