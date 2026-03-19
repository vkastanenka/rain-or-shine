import { FaMinus } from "react-icons/fa";
import { type IsDayValue } from "@/services";
import type { IconComponent } from "@/components";
import {
  WMO_CODE_DAY_ICON_FILL_MAP,
  WMO_CODE_NIGHT_ICON_FILL_MAP,
  type WmoCodeDescriptionMapKey,
} from "@/entities";
import type { LinkProps } from "@tanstack/react-router";
import { toUrlSlug } from "@/utils";
import type { WeatherUrlPathParams } from "../types";

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

export const formatWmoIcon = (
  code?: WmoCodeDescriptionMapKey,
  isDay?: IsDayValue,
): IconComponent => {
  if (code === undefined || isDay === undefined) {
    return FaMinus as IconComponent;
  }
  const iconMap = !!isDay
    ? WMO_CODE_DAY_ICON_FILL_MAP
    : WMO_CODE_NIGHT_ICON_FILL_MAP;
  return iconMap[code];
};

export const formatWeatherUrlPath = ({
  countryCode,
  region,
  city,
  period,
}: WeatherUrlPathParams): LinkProps["to"] => {
  const segments = [countryCode, region, city, period].map(toUrlSlug);
  return `/weather/${segments.join("/")}` as any;
};
