import { FlexRow, Text } from "@/components";
import { cn } from "@/utils";

export const BaseWeatherCardDetailedVariable = ({
  nameLabel,
  valueLabel,
  MainIcon,
  ...props
}: any) => {
  return (
    <FlexRow stretchItems align={"center"} {...props}>
      <FlexRow align="center" gap={1}>
        <MainIcon
          className={cn("w-4", "sm:w-6", "xl:w-7", "fill-base-content")}
        />
        <Text type={{ base: "caption", sm: "body2", xl: "body1" }}>
          {nameLabel}
        </Text>
      </FlexRow>
      <Text type={{ base: "caption", sm: "body2", xl: "body1" }}>
        {valueLabel}
      </Text>
    </FlexRow>
  );
};
