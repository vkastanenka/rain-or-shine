import { Card, Flex, FlexCol, FlexRow, Text } from "@/components";
import { cn } from "@/utils";
import {
  WiStrongWind,
  WiHumidity,
  WiRain,
  WiRaindrop,
  WiWindDeg,
} from "@/assets/icons/erikflowers-weather-icons";
import { BaseWeatherCardDetailedVariable } from "../base-weather-card-detailed-variable";

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
    <Card className={cn("p-2", "sm:p-3", "xl:p-4", "w-full")} {...props}>
      <FlexRow
        gap={2}
        justify="between"
        align="center"
        className={cn("max-w-110", "sm:max-w-3xl", "xl:max-w-5/6")}
      >
        <FlexCol>
          <Text
            type={{ base: "body2", sm: "body1", xl: "large" }}
            className="font-bold"
          >
            {timeLabel}
          </Text>
          <Flex
            direction={{ base: "col", sm: "row" }}
            gap={{ base: 0, sm: 2 }}
            align={{ base: "start", sm: "center" }}
          >
            <FlexRow gap={2} align="center">
              <ConditionIcon className="w-8 sm:w-15, xl:w-18"></ConditionIcon>
              <Text type={{ base: "headline3", sm: "headline2" }}>
                {temperatureLabel}
              </Text>
            </FlexRow>
            <Flex direction={{ base: "col-reverse", sm: "col" }} gap={0}>
              <Text type={{ base: "body2", sm: "body1", xl: "large" }}>
                {conditionLabel}
              </Text>
              <Text
                type={{
                  base: "caption",
                  sm: "body2",
                  xl: "body1",
                }}
              >
                {apparentTemperatureLabel}
              </Text>
            </Flex>
          </Flex>
        </FlexCol>
        <Flex direction={{ base: "col", sm: "row" }} gap={{ base: 0, sm: 2 }}>
          <FlexRow
            gap={{ base: 1, sm: 2 }}
            className={cn("w-full", "sm:w-auto")}
          >
            <BaseWeatherCardDetailedVariable
              MainIcon={WiWindDeg}
              nameLabel={"Wind"}
              value={windValueLabel}
            />
            <BaseWeatherCardDetailedVariable
              MainIcon={WiStrongWind}
              mainLabel={"Wind Gust"}
              secondaryLabel={windGustValueLabel}
            />
            <BaseWeatherCardDetailedVariable
              Icon={WiHumidity}
              mainLabel={"Humidity"}
              secondaryLabel={humidityValueLabel}
            />
          </FlexRow>
          <FlexRow
            gap={{ base: 1, sm: 2 }}
            className={cn("w-full", "sm:w-auto")}
          >
            <BaseWeatherCardDetailedVariable
              MainIcon={WiRain}
              mainLabel={"P.O.P."}
              secondaryLabel={precipitationChanceValueLabel}
            />
            {rainValueLabel && (
              <BaseWeatherCardDetailedVariable
                Icon={WiRaindrop}
                mainLabel={"Rain"}
                secondaryLabel={rainValueLabel}
              />
            )}
          </FlexRow>
        </Flex>
      </FlexRow>
    </Card>
  );
};
