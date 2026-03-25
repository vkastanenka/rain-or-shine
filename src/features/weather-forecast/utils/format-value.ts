import { type IsDayValue } from "@/services";
import {
  WMO_CODE_DAY_ICON_FILL_CONFIG_MAP,
  WMO_CODE_NIGHT_ICON_FILL_CONFIG_MAP,
  type WmoCodeDescriptionMapKey,
} from "@/entities";
import type { LinkProps } from "@tanstack/react-router";
import { toUrlSlug } from "@/utils";
import type { WeatherUrlPathParams } from "../types";
import type { MeteoconIconConfig } from "@/components/ui/icon/types";

const EMPTY_VALUE = "--";

export const formatText = (value?: string | number): string => {
  if (value === "" || value === undefined) return EMPTY_VALUE;
  return `${value}`;
};

export const formatCommaSeparatedText = (
  items: (string | number | undefined)[],
): string => {
  return items.map((item) => formatText(item)).join(", ");
};

export const formatValueWithUnit = (
  value?: string | number,
  unit?: string,
): string => {
  if (
    value === "" ||
    value === undefined ||
    unit === "" ||
    unit === undefined
  ) {
    return EMPTY_VALUE;
  }
  return `${value}${unit}`;
};

export const formatWmoIconConfig = (
  code?: WmoCodeDescriptionMapKey,
  isDay?: IsDayValue,
): MeteoconIconConfig => {
  if (code === undefined || isDay === undefined) {
    return { lib: "fill", name: "ClearDay" };
  }
  const iconMap = !!isDay
    ? WMO_CODE_DAY_ICON_FILL_CONFIG_MAP
    : WMO_CODE_NIGHT_ICON_FILL_CONFIG_MAP;
  return iconMap[code];
};

export const formatWeatherUrlPath = ({
  countryName,
  region,
  city,
  period,
}: WeatherUrlPathParams): LinkProps["to"] => {
  const segments = [countryName, region, city, period].map(toUrlSlug);
  return `/weather/${segments.join("/")}` as LinkProps["to"];
};
