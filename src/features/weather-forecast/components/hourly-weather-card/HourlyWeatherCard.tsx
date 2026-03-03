import { useMemo } from "react";
import { type OpenMeteoForecastHourlyListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getHourlyWeatherCardProps } from "./hourly-weather-card.utils";

export const HourlyWeatherCard = (props: OpenMeteoForecastHourlyListItem) => {
  const cardProps = useMemo(() => getHourlyWeatherCardProps(props), [props]);
  return <BaseWeatherCard {...cardProps} />;
};
