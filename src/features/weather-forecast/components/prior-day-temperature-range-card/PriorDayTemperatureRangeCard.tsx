import { Card, FlexCol, FlexRow, Text } from "@/components";
import { cn } from "@/utils";
// import { FORECAST_LABELS_MAP } from "@/features";

export const PriorDayTemperatureRangeCard = () => {
  return (
    <Card className={cn("p-4")}>
      <FlexCol gap={4} className={cn("w-full", "h-full")}>
        <FlexCol gap={0}>
          <Text type="body2">Yesterday</Text>
          <Text type="body2">Mon, Mar 2</Text>
        </FlexCol>
        <FlexCol gap={0}>
          <FlexRow justify="center">
            <Text type="headline4">H</Text>
            <Text type="headline4">-4°</Text>
          </FlexRow>
          <FlexRow justify="center">
            <Text type="headline4">L</Text>
            <Text type="headline4">-14°</Text>
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </Card>
  );
};
