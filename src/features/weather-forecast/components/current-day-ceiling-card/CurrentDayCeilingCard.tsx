import { Card } from "@/components";
import { cn } from "@/utils";
import { CeilingLevelIcon } from "../ceiling-level-icon/CeilingLevelIcon";

export const CurrentDayCeilingCard = () => {
  return (
    <Card className={cn("p-4")}>
      Current Day Ceiling Card
      <CeilingLevelIcon />
    </Card>
  );
};
