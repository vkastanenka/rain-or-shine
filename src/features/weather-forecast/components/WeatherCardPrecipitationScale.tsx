import { Flex, Text } from "@/components";
import {
  formatOpenMeteoValue,
  type OpenMeteoPrecipitationVariable,
  type OpenMeteoWeatherCodeVariable,
} from "@/entities";
import { cn } from "@/utils";
import {
  calculateWeatherCardPrecipitationIndicatorHeight,
  getWeatherCardPrecipitationAmountIcon,
} from "../utils";

interface WeatherCardPrecipitationScaleProps {
  precipitation: OpenMeteoPrecipitationVariable;
  weatherCode: OpenMeteoWeatherCodeVariable;
  className?: string;
}

export const WeatherCardPrecipitationScale = ({
  precipitation,
  weatherCode,
  className,
}: WeatherCardPrecipitationScaleProps) => {
  const hasPrecipitation = (precipitation ?? 0) > 0;
  const Icon = getWeatherCardPrecipitationAmountIcon(
    weatherCode,
    precipitation,
  );

  if (!hasPrecipitation || !Icon) {
    return <div className={cn("pb-3", className)} />;
  }

  const indicatorHeight =
    calculateWeatherCardPrecipitationIndicatorHeight(precipitation);

  return (
    <Flex
      gap={1}
      direction={{ base: "col" }}
      align={{ base: "center" }}
      className={cn("w-full", className)}
    >
      <Flex gap={1}>
        <Icon />
        <Text type="body2">
          {formatOpenMeteoValue.precipitation(precipitation)}
        </Text>
      </Flex>

      {/* Precipitation Amount Indicator */}
      <div className={cn("w-full", "opacity-80")}>
        <div className={cn("w-full", "h-0.5", "bg-neutral-50")}></div>
        <div
          className={cn("w-full", "bg-neutral-300")}
          style={{ height: `${indicatorHeight}px` }}
        ></div>
      </div>
    </Flex>
  );
};
