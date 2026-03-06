import { Card } from "@/components";
import { cn } from "@/utils";
import { PressureGaugeIcon } from "../pressure-gauge-icon/PressureGaugeIcon";

export const CurrentDayPressureCard = () => {
  return (
    <Card className={cn("p-4")}>
      Current Day Pressure Card
      <PressureGaugeIcon sizeX={140} />
    </Card>
  );
};
