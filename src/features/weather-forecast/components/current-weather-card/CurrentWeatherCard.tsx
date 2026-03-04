import { Card, FlexRow, FlexCol, Text } from "@/components";
import { cn } from "@/utils";
import { type CurrentWeatherCardProps } from "./current-weather-card.types";

export const CurrentWeatherCard = ({
  primaryTemperatureLabel,
  secondaryTemperatureLabel,
  highTemperatureLabel,
  lowTemperatureLabel,
  conditionLabel,
  ConditionIcon,
}: CurrentWeatherCardProps) => {
  return (
    <Card className={cn("p-4")}>
      <FlexRow align="center" justify="center" gap={4}>
        <ConditionIcon size={80} />
        <Text type="headline1">{primaryTemperatureLabel}</Text>
        <FlexCol gap={0}>
          <Text>{conditionLabel}</Text>
          <Text>{secondaryTemperatureLabel}</Text>
          <FlexRow align="center" gap={2}>
            <Text>{highTemperatureLabel}</Text>
            <Text>{lowTemperatureLabel}</Text>
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </Card>
  );
};
