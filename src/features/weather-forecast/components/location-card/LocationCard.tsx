import { FaCity } from "react-icons/fa";
import { Card, FlexCol, FlexRow, Text } from "@/components";
import { WMO_CODE_DAY_ICON_FILL_MAP } from "@/entities";

export const LocationCard = () => {
  const Icon = WMO_CODE_DAY_ICON_FILL_MAP[0];
  return (
    <Card className="p-4 w-full">
      <FlexRow fit gap={2} align="center" justify="between">
        <FlexCol>
          <FlexRow gap={1} align="center">
            <FaCity />
            <Text>Tottenham</Text>
          </FlexRow>
          <Text type="body2">ON, Canada</Text>
        </FlexCol>
        <FlexRow gap={1} align="center">
          <Icon />
          <Text type="large">37°F</Text>
        </FlexRow>
      </FlexRow>
    </Card>
  );
};
