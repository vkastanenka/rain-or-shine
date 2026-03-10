import { FlexCol, Text } from "@/components";
import { BaseWeatherCardDetailed } from "../base-weather-card-detailed";

export const WeatherForecastPeriodList = ({
  timeLabel,
  dataList,
  ...props
}: any) => {
  return (
    <FlexCol gap={2} className="w-full" {...props}>
      <Text type="body2">{timeLabel}</Text>
      {dataList.map((dataItem: any, i: number) => (
        <BaseWeatherCardDetailed key={`${dataItem.time}-${i}`} />
      ))}
    </FlexCol>
  );
};
