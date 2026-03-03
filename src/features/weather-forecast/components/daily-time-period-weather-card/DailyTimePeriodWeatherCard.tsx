import { useMemo } from "react";
import { type OpenMeteoForecastDailyTimePeriodListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDailyTimePeriodWeatherCardProps } from "./daily-time-period-period-weather-card.utils";

export const DailyTimePeriodWeatherCard = (
  props: OpenMeteoForecastDailyTimePeriodListItem,
) => {
  const cardProps = useMemo(
    () => getDailyTimePeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
