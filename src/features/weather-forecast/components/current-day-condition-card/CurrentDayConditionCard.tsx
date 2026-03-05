import { Card, FlexCol, FlexRow, Text } from "@/components";
import { FORECAST_LABELS_MAP } from "@/features";
import { cn } from "@/utils";
import { type CurrentDayConditionCardProps } from "./current-day-condition-card.types";
import { SunPathIcon } from "../sun-path-icon/SunPathIcon";

export const CurrentDayConditionCard = ({
  fullDateLabel,
  sunriseTimeLabel,
  sunsetTimeLabel,
}: CurrentDayConditionCardProps) => {
  return (
    <Card className={cn("p-4")}>
      <FlexCol justify="between" className={cn("w-full", "h-full")}>
        <Text type="body2">{fullDateLabel}</Text>
        <FlexRow justify="center">
          <SunPathIcon />
        </FlexRow>
        <FlexRow justify="between">
          <FlexCol gap={0}>
            <Text type="caption">{FORECAST_LABELS_MAP.sunrise}</Text>
            <Text type="body1">{sunriseTimeLabel}</Text>
          </FlexCol>
          <FlexCol gap={0}>
            <Text type="caption">{FORECAST_LABELS_MAP.sunset}</Text>
            <Text>{sunsetTimeLabel}</Text>
          </FlexCol>
        </FlexRow>
      </FlexCol>
    </Card>
  );
};
