import { useMemo } from "react";
import { type OpenMeteoHourlyForecastByTimePeriodListItem } from "@/entities";
import { BaseWeatherCard } from "../base-weather-card";
import { getDiurnalPeriodWeatherCardProps } from "./diurnal-period-weather-card.utils";

export const DiurnalPeriodWeatherCard = (
  props: OpenMeteoHourlyForecastByTimePeriodListItem,
) => {
  const cardProps = useMemo(
    () => getDiurnalPeriodWeatherCardProps(props),
    [props],
  );
  return <BaseWeatherCard {...cardProps} />;
};
