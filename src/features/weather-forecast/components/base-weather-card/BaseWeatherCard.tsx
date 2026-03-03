import { FlexRow, FlexCol, Text } from "@/components";
import { cn } from "@/utils";
import { WeatherCardPrecipitationScale } from "../WeatherCardPrecipitationScale";
import { type BaseWeatherCardProps } from "./base-weather-card.types";

export const BaseWeatherCard = ({
  primaryTimeLabel,
  secondaryTimeLabel,
  MainIcon,
  primaryTemperature,
  secondaryTemperature,
  precipitationProbability,
  PrecipitationProbabilityIcon,
  precipitation,
  weatherCode,
  ...props
}: BaseWeatherCardProps) => {
  return (
    <div
      className={cn("bg-mauve-700", "rounded-lg", "pt-3", "overflow-hidden")}
      {...props}
    >
      <FlexCol gap={4} className={cn("w-full", "h-full")}>
        <FlexCol align="center" className={cn("px-3", "w-full")}>
          <Text>{primaryTimeLabel}</Text>
          {secondaryTimeLabel && (
            <Text type="caption">{secondaryTimeLabel}</Text>
          )}
          <MainIcon size={48} />
          <Text type="headline4">{primaryTemperature}</Text>
          <Text type="caption">{secondaryTemperature}</Text>
          <FlexRow gap={1}>
            <PrecipitationProbabilityIcon />
            <Text>{precipitationProbability}</Text>
          </FlexRow>
        </FlexCol>

        <WeatherCardPrecipitationScale
          precipitation={precipitation}
          weatherCode={weatherCode}
        />
      </FlexCol>
    </div>
  );
};
