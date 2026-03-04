import { Card } from "@/components";
import { cn } from "@/utils";
import { VisibilityLevelIcon } from "../visibility-level-icon/VisibilityLevelIcon";

export const CurrentDayVisibilityCard = () => {
  return (
    <Card className={cn("p-4")}>
      Current Day Visibility Card
      <VisibilityLevelIcon />
    </Card>
  );
};
