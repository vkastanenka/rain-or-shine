import { type MapKey, type MapValue } from "@/types";
import {
  WMO_CODE_DESCRIPTION_MAP,
  WMO_RAIN_CODE_DESCRIPTION_MAP,
  WMO_SNOW_CODE_DESCRIPTION_MAP,
  WMO_CODE_DAY_ICON_FILL_CONFIG_MAP,
  WMO_CODE_DAY_ICON_LINE_CONFIG_MAP,
  WMO_CODE_NIGHT_ICON_FILL_CONFIG_MAP,
  WMO_CODE_NIGHT_ICON_LINE_CONFIG_MAP,
} from "./constants";

/**
 * WMO Code Types
 */

export type WmoCodeDescriptionMapKey = MapKey<typeof WMO_CODE_DESCRIPTION_MAP>;
export type WmoCodeDescriptionMapValue = MapValue<
  typeof WMO_CODE_DESCRIPTION_MAP
>;

export type WmoRainCodeDescriptionMapKey = MapKey<
  typeof WMO_RAIN_CODE_DESCRIPTION_MAP
>;
export type WmoRainCodeDescriptionMapValue = MapValue<
  typeof WMO_RAIN_CODE_DESCRIPTION_MAP
>;

export type WmoSnowCodeDescriptionMapKey = MapKey<
  typeof WMO_SNOW_CODE_DESCRIPTION_MAP
>;
export type WmoSnowCodeDescriptionMapValue = MapValue<
  typeof WMO_SNOW_CODE_DESCRIPTION_MAP
>;

/**
 * Icon Map Types
 */

export type WmoCodeDayIconFillMapKey = MapKey<
  typeof WMO_CODE_DAY_ICON_FILL_CONFIG_MAP
>;
export type WmoCodeDayIconFillMapValue = MapValue<
  typeof WMO_CODE_DAY_ICON_FILL_CONFIG_MAP
>;

export type WmoCodeDayIconLineMapKey = MapKey<
  typeof WMO_CODE_DAY_ICON_LINE_CONFIG_MAP
>;
export type WmoCodeDayIconLineMapValue = MapValue<
  typeof WMO_CODE_DAY_ICON_LINE_CONFIG_MAP
>;

export type WmoCodeNightIconFillMapKey = MapKey<
  typeof WMO_CODE_NIGHT_ICON_FILL_CONFIG_MAP
>;
export type WmoCodeNightIconFillMapValue = MapValue<
  typeof WMO_CODE_NIGHT_ICON_FILL_CONFIG_MAP
>;

export type WmoCodeNightIconLineMapKey = MapKey<
  typeof WMO_CODE_NIGHT_ICON_LINE_CONFIG_MAP
>;
export type WmoCodeNightIconLineMapValue = MapValue<
  typeof WMO_CODE_NIGHT_ICON_LINE_CONFIG_MAP
>;
