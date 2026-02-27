import { FlexRow, FlexCol, Text } from "@/components";
import {
  formatOpenMeteoValue,
  type OpenMeteoForecastDailyTimePeriodListItem,
} from "@/entities";
import { cn } from "@/utils";
import {
  getWeatherCardIcon,
  getWeatherCardPrecipitationProbabilityIcon,
} from "../utils";
import { WeatherCardPrecipitationScale } from "./WeatherCardPrecipitationScale";

export const DailyTimePeriodWeatherCard = ({
  apparent_temperature = 0,
  is_day = 1,
  precipitation_probability = 0,
  precipitation = 0,
  temperature_2m = 0,
  weather_code = 0,
  time,
  timePeriod,
  ...props
}: OpenMeteoForecastDailyTimePeriodListItem) => {
  const MainIcon = getWeatherCardIcon(weather_code, is_day);
  const PrecipitationProbabilityIcon =
    getWeatherCardPrecipitationProbabilityIcon(weather_code);

  return (
    <div
      className={cn("bg-mauve-700", "rounded-lg", "pt-3", "overflow-hidden")}
      {...props}
    >
      <FlexCol gap={4} justify="between" className={cn("w-full", "h-full")}>
        <FlexCol align="center" className={cn("px-3", "w-full")}>
          <Text>{formatOpenMeteoValue.dailyTimePeriod(time)}</Text>
          <MainIcon size={48} />
          <Text type="headline4">
            {formatOpenMeteoValue.temperature(temperature_2m)}
          </Text>
          <Text type="caption">
            {formatOpenMeteoValue.apparentTemperature(apparent_temperature)}
          </Text>
          <FlexRow gap={1}>
            <PrecipitationProbabilityIcon />
            <Text>
              {formatOpenMeteoValue.precipitationProbability(
                precipitation_probability,
              )}
            </Text>
          </FlexRow>
        </FlexCol>

        <WeatherCardPrecipitationScale
          precipitation={precipitation}
          weatherCode={weather_code}
        />
      </FlexCol>
    </div>
  );
};
