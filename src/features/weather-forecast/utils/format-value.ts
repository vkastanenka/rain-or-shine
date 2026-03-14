import { FaMinus } from "react-icons/fa";
import { type Locality, type IsDayValue } from "@/services";
import type { IconComponent } from "@/components";
import {
  WMO_CODE_DAY_ICON_FILL_MAP,
  WMO_CODE_NIGHT_ICON_FILL_MAP,
  type WmoCodeDescriptionMapKey,
} from "@/entities";

const EMPTY_VALUE = "--";

export const formatText = (value?: string | number): string => {
  if (!value) return EMPTY_VALUE;
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
  if (!value || !unit) return EMPTY_VALUE;
  return `${value}${unit}`;
};

export const formatWmoIcon = (
  code?: WmoCodeDescriptionMapKey,
  isDay?: IsDayValue,
): IconComponent => {
  if (!code) return FaMinus as IconComponent;
  const iconMap = isDay
    ? WMO_CODE_DAY_ICON_FILL_MAP
    : WMO_CODE_NIGHT_ICON_FILL_MAP;
  return iconMap[code];
};

export const formatWeatherUrl = (
  locality: Locality,
  period: string = "current",
): string => {
  const country = locality.countryCode.toLowerCase();
  const province = locality.principalSubdivision
    .toLowerCase()
    .replace(/\s+/g, "-");
  const city = locality.city.toLowerCase().replace(/\s+/g, "-");

  return `/weather/${country}/${province}/${city}/${period}`;
};
