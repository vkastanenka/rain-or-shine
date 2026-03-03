import { useMemo } from "react";
import { type OpenMeteoForecastHourlyListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDiurnalPeriodWeatherCardProps } from "./diurnal-period-weather-card.utils";

export const DiurnalPeriodWeatherCard = (
  props: OpenMeteoForecastHourlyListItem,
) => {
  const cardProps = useMemo(
    () => getDiurnalPeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
