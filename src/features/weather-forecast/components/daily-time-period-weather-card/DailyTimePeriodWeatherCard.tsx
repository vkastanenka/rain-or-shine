import { useMemo } from "react";
import { type OpenMeteoForecastTimePeriodListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDailyTimePeriodWeatherCardProps } from "./daily-time-period-period-weather-card.utils";

export const DailyTimePeriodWeatherCard = (
  props: OpenMeteoForecastTimePeriodListItem,
) => {
  const cardProps = useMemo(
    () => getDailyTimePeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
