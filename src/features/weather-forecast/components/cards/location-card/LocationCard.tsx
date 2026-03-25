import { FaCity } from "react-icons/fa";
import { Card, FlexCol, FlexRow, Text, LazyMeteoconIcon } from "@/components";
import { type LocationCardProps } from "./types";

export const LocationCard = ({
  city,
  region,
  iconConfig,
  temperature,
}: LocationCardProps & { isHover3d?: boolean }) => {
  return (
    <Card padding className="w-full">
      <FlexRow gap={2} align="center" justify="between" className="w-full">
        <FlexCol>
          <FlexRow gap={1} align="center">
            <FaCity />
            <Text>{city}</Text>
          </FlexRow>
          <Text type="body2">{region}</Text>
        </FlexCol>
        <FlexRow gap={1} align="center">
          <LazyMeteoconIcon lib={iconConfig.lib} name={iconConfig.name} />
          <Text type="large">{temperature}</Text>
        </FlexRow>
      </FlexRow>
    </Card>
  );
};
