import { useMemo } from "react";
import { type OpenMeteoHourlyForecastByDiurnalPeriodListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDiurnalPeriodWeatherCardProps } from "./diurnal-period-weather-card.utils";

export const DiurnalPeriodWeatherCard = (
  props: OpenMeteoHourlyForecastByDiurnalPeriodListItem,
) => {
  const cardProps = useMemo(
    () => getDiurnalPeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
