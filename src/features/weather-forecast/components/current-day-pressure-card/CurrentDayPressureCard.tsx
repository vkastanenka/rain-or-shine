import { Card, FlexCol, FlexRow, Text } from "@/components";
import { FORECAST_LABELS_MAP } from "@/features";
import { cn } from "@/utils";
import { type CurrentDayPressureCardProps } from "./current-day-pressure-card.types";
import { PressureGaugeIcon } from "../pressure-gauge-icon/PressureGaugeIcon";

export const CurrentDayPressureCard = (props: CurrentDayPressureCardProps) => {
  return (
    <Card className={cn("p-4")}>
      <FlexCol gap={8} className={cn("w-full", "h-full")}>
        <FlexCol gap={0}>
          <Text type="body2">{FORECAST_LABELS_MAP.pressure}</Text>
          <Text type="headline6">{props.pressureLabel}</Text>
        </FlexCol>
        <FlexRow justify="center">
          <PressureGaugeIcon {...{ pressure: props.pressure }} sizeX={140} />
        </FlexRow>
      </FlexCol>
    </Card>
  );
};
