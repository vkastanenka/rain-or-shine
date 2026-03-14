import { FaCity } from "react-icons/fa";
import { Card, FlexCol, FlexRow, Text } from "@/components";
import { type LocalityCardProps } from "./LocalityCard.types";

export const LocalityCard = ({
  city,
  region,
  WmoIcon,
  temperature,
}: LocalityCardProps) => {
  return (
    <Card fit pad>
      <FlexRow fit gap={2} align="center" justify="between">
        <FlexCol>
          <FlexRow gap={1} align="center">
            <FaCity />
            <Text>{city}</Text>
          </FlexRow>
          <Text type="body2">{region}</Text>
        </FlexCol>
        <FlexRow gap={1} align="center">
          <WmoIcon />
          <Text type="large">{temperature}</Text>
        </FlexRow>
      </FlexRow>
    </Card>
  );
};
