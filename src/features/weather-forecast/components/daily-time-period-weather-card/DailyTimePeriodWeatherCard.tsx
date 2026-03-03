import { useMemo } from "react";
import { type OpenMeteoForecastHourlyListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDailyTimePeriodWeatherCardProps } from "./daily-time-period-period-weather-card.utils";

export const DailyTimePeriodWeatherCard = (
  props: OpenMeteoForecastHourlyListItem,
) => {
  const cardProps = useMemo(
    () => getDailyTimePeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
