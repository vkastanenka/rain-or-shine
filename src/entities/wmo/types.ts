import { type MapKey, type MapValue } from "@/types";
import {
  WMO_CODES_MAP,
  WMO_RAIN_CODES_MAP,
  WMO_SNOW_CODES_MAP,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_DAY_ICONS_LINE_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_LINE_MAP,
} from "./constants";

/**
 * WMO Code Types
 */

export type WmoCodesMapKey = MapKey<typeof WMO_CODES_MAP>;
export type WmoCodesMapValue = MapValue<typeof WMO_CODES_MAP>;

export type WmoRainCodesMapKey = MapKey<typeof WMO_RAIN_CODES_MAP>;
export type WmoRainCodesMapValue = MapValue<typeof WMO_RAIN_CODES_MAP>;

export type WmoSnowCodesMapKey = MapKey<typeof WMO_SNOW_CODES_MAP>;
export type WmoSnowCodesMapValue = MapValue<typeof WMO_SNOW_CODES_MAP>;

/**
 * Icon Map Types
 */

export type WmoCodesDayIconsFillMapKey = MapKey<
  typeof WMO_CODES_DAY_ICONS_FILL_MAP
>;
export type WmoCodesDayIconsFillMapValue = MapValue<
  typeof WMO_CODES_DAY_ICONS_FILL_MAP
>;

export type WmoCodesDayIconsLineMapKey = MapKey<
  typeof WMO_CODES_DAY_ICONS_LINE_MAP
>;
export type WmoCodesDayIconsLineMapValue = MapValue<
  typeof WMO_CODES_DAY_ICONS_LINE_MAP
>;

export type WmoCodesNightIconsFillMapKey = MapKey<
  typeof WMO_CODES_NIGHT_ICONS_FILL_MAP
>;
export type WmoCodesNightIconsFillMapValue = MapValue<
  typeof WMO_CODES_NIGHT_ICONS_FILL_MAP
>;

export type WmoCodesNightIconsLineMapKey = MapKey<
  typeof WMO_CODES_NIGHT_ICONS_LINE_MAP
>;
export type WmoCodesNightIconsLineMapValue = MapValue<
  typeof WMO_CODES_NIGHT_ICONS_LINE_MAP
>;
