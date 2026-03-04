import { Card, FlexCol, FlexRow, Text } from "@/components";
import { cn } from "@/utils";
import { FORECAST_LABELS_MAP } from "@/features";
import { type CurrentDayWindCardProps } from "./current-day-wind-card.types";

export const CurrentDayWindCard = ({
  windSpeedLabel,
  cardinalDirectionLabel,
  gustSpeedLabel,
  WindSpeedIcon,
}: CurrentDayWindCardProps) => {
  return (
    <Card className={cn("p-4")}>
      <FlexCol justify="between" className={cn("w-full", "h-full")}>
        <FlexCol gap={0}>
          <Text type="body2">{FORECAST_LABELS_MAP.wind}</Text>
          <FlexRow gap={2} align="end">
            <Text type="headline6">{windSpeedLabel}</Text>
            <Text type="caption" className="pb-0.5">
              {cardinalDirectionLabel}
            </Text>
          </FlexRow>
        </FlexCol>
        <FlexRow justify="center">
          <WindSpeedIcon size={60} />
        </FlexRow>
        <Text>{gustSpeedLabel}</Text>
      </FlexCol>
    </Card>
  );
};
