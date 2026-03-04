import { Card } from "@/components";
import { cn } from "@/utils";
import { HumidityLevelIcon } from "../humidity-level-icon/HumidityLevelIcon";

export const CurrentDayHumidityCard = () => {
  return (
    <Card className={cn("p-4")}>
      Current Day Humidity Card <HumidityLevelIcon />
    </Card>
  );
};
