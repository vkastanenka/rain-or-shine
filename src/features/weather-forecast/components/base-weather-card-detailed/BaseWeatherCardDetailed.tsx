import { Card, Flex, FlexCol, FlexRow, Text } from "@/components";
import { cn } from "@/utils";
import {
  WiStrongWind,
  WiHumidity,
  WiRain,
  WiRaindrop,
  WiWindDeg,
} from "@/assets/icons/erikflowers-weather-icons";
import { type ComponentType } from "react";

// --- Types ---

interface IconProps {
  className?: string;
}

interface WeatherVariableProps {
  label: string;
  value: string | number;
  Icon: ComponentType<IconProps>;
  className?: string;
}

// --- Sub-Components ---

export const BaseWeatherCardDetailedContainer = ({
  children,
  className,
  ...props
}: any) => (
  <Card className={cn("p-2 sm:p-3 xl:p-4 w-full", className)} {...props}>
    {children}
  </Card>
);

export const WeatherStat = ({
  label,
  value,
  Icon,
  className,
}: WeatherVariableProps) => (
  <FlexRow align="center" gap={1} className={cn("min-w-fit", className)}>
    <FlexRow align="center" gap={1}>
      <Icon className="w-4 sm:w-6 xl:w-7 fill-base-content" />
      <Text
        type={{ base: "caption", sm: "body2", xl: "body1" }}
        className="whitespace-nowrap"
      >
        {label}
      </Text>
    </FlexRow>
    <Text
      type={{ base: "caption", sm: "body2", xl: "body1" }}
      className="font-medium"
    >
      {value}
    </Text>
  </FlexRow>
);

// --- Layout Components ---

export const BaseWeatherCardDetailedMainData = ({
  temperature,
  condition,
  apparentTemp,
  Icon,
}: any) => (
  <Flex
    gap={{ base: 0, sm: 2 }}
    direction={{ base: "col", sm: "row" }}
    align={{ base: "start", sm: "center" }}
  >
    <FlexRow gap={2} align="center">
      <Icon className="w-8 sm:w-12 xl:w-16" />
      <Text type={{ base: "headline3", sm: "headline2" }}>{temperature}</Text>
    </FlexRow>
    <Flex direction={{ base: "col-reverse", sm: "col" }}>
      <Text type={{ base: "body2", sm: "body1", xl: "large" }}>
        {condition}
      </Text>
      <Text
        type={{ base: "caption", sm: "body2", xl: "body1" }}
        className="opacity-80"
      >
        {apparentTemp}
      </Text>
    </Flex>
  </Flex>
);

export const BaseWeatherCardDetailedStats = ({
  wind,
  windGust,
  humidity,
  pop,
  rain,
}: any) => (
  <Flex
    direction={{ base: "col", lg: "row" }}
    gap={{ base: 1, sm: 2 }}
    className="flex-wrap"
  >
    <FlexRow gap={2} wrap>
      <WeatherStat Icon={WiWindDeg} label="Wind" value={wind} />
      <WeatherStat Icon={WiStrongWind} label="Gust" value={windGust} />
      <WeatherStat Icon={WiHumidity} label="Hum." value={humidity} />
    </FlexRow>
    <FlexRow gap={2} wrap>
      <WeatherStat Icon={WiRain} label="P.O.P." value={pop} />
      {rain && <WeatherStat Icon={WiRaindrop} label="Rain" value={rain} />}
    </FlexRow>
  </Flex>
);

// --- Main Component ---

export const BaseWeatherCardDetailed = ({
  timeLabel,
  ConditionIcon,
  conditionLabel,
  temperatureLabel,
  apparentTemperatureLabel,
  windValueLabel,
  windGustValueLabel,
  humidityValueLabel,
  precipitationChanceValueLabel,
  rainValueLabel,
  ...props
}: any) => {
  return (
    <BaseWeatherCardDetailedContainer {...props}>
      <FlexRow gap={4} justify="between" align="center" className="w-full">
        <FlexCol gap={1}>
          <Text
            type={{ base: "body2", sm: "body1", xl: "large" }}
            className="font-bold"
          >
            {timeLabel}
          </Text>
          <BaseWeatherCardDetailedMainData
            temperature={temperatureLabel}
            condition={conditionLabel}
            apparentTemp={apparentTemperatureLabel}
            Icon={ConditionIcon}
          />
        </FlexCol>

        <BaseWeatherCardDetailedStats
          wind={windValueLabel}
          windGust={windGustValueLabel}
          humidity={humidityValueLabel}
          pop={precipitationChanceValueLabel}
          rain={rainValueLabel}
        />
      </FlexRow>
    </BaseWeatherCardDetailedContainer>
  );
};
