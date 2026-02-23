import {
  WMO_CODES_MAP,
  WMO_RAIN_CODES_MAP,
  WMO_SNOW_CODES_MAP,
  WMO_CODES_DAY_ICONS_FILL_MAP,
  WMO_CODES_DAY_ICONS_LINE_MAP,
  WMO_CODES_NIGHT_ICONS_FILL_MAP,
  WMO_CODES_NIGHT_ICONS_LINE_MAP,
} from "./wmo.constants";

export type WmoCodesMapKey = keyof typeof WMO_CODES_MAP;
export type WmoCodesMapValue =
  (typeof WMO_CODES_MAP)[keyof typeof WMO_CODES_MAP];

export type WmoRainCodesMapKey = keyof typeof WMO_RAIN_CODES_MAP;
export type WmoRainCodesMapValue =
  (typeof WMO_RAIN_CODES_MAP)[keyof typeof WMO_RAIN_CODES_MAP];

export type WmoSnowCodesMapKey = keyof typeof WMO_SNOW_CODES_MAP;
export type WmoSnowCodesMapValue =
  (typeof WMO_SNOW_CODES_MAP)[keyof typeof WMO_SNOW_CODES_MAP];

export type WmoCodesDayIconsFillMapKey =
  keyof typeof WMO_CODES_DAY_ICONS_FILL_MAP;
export type WmoCodesDayIconsFillMapValue =
  (typeof WMO_CODES_DAY_ICONS_FILL_MAP)[keyof typeof WMO_CODES_DAY_ICONS_FILL_MAP];

export type WmoCodesDayIconsLineMapKey =
  keyof typeof WMO_CODES_DAY_ICONS_LINE_MAP;
export type WmoCodesDayIconsLineMapValue =
  (typeof WMO_CODES_DAY_ICONS_LINE_MAP)[keyof typeof WMO_CODES_DAY_ICONS_LINE_MAP];

export type WmoCodesNightIconsFillMapKey =
  keyof typeof WMO_CODES_NIGHT_ICONS_FILL_MAP;
export type WmoCodesNightIconsFillMapValue =
  (typeof WMO_CODES_NIGHT_ICONS_FILL_MAP)[keyof typeof WMO_CODES_NIGHT_ICONS_FILL_MAP];

export type WmoCodesNightIconsLineMapKey =
  keyof typeof WMO_CODES_NIGHT_ICONS_LINE_MAP;
export type WmoCodesNightIconsLineMapValue =
  (typeof WMO_CODES_NIGHT_ICONS_LINE_MAP)[keyof typeof WMO_CODES_NIGHT_ICONS_LINE_MAP];
