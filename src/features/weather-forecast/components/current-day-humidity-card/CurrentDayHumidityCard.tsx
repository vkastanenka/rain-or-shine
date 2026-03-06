import { Card, FlexCol, FlexRow, Text } from "@/components";
import { FORECAST_LABELS_MAP } from "@/features";
import { cn } from "@/utils";
import { HumidityLevelIcon } from "../humidity-level-icon/HumidityLevelIcon";
import type { CurrentDayHumidityCardProps } from "./current-day-humidity-card.types";

export const CurrentDayHumidityCard = (props: CurrentDayHumidityCardProps) => {
  return (
    <Card className={cn("p-4")}>
      <FlexCol gap={8} className={cn("w-full", "h-full")}>
        <FlexCol gap={0}>
          <Text type="body2">{FORECAST_LABELS_MAP.humidity}</Text>
          <Text type="headline6">{props.humidityLabel}</Text>
        </FlexCol>
        <FlexRow justify="center">
          <HumidityLevelIcon {...{ pressure: props.humidity }} sizeX={140} />
        </FlexRow>
      </FlexCol>
    </Card>
  );
};
