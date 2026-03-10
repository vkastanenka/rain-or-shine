import { TIME_INTERVAL_MAP, TIME_INTERVAL_UNIT_MAP } from "../constants";

export type TimeIntervalMapValue =
  (typeof TIME_INTERVAL_MAP)[keyof typeof TIME_INTERVAL_MAP];

export type TimeIntervalUnitMapValue =
  (typeof TIME_INTERVAL_UNIT_MAP)[keyof typeof TIME_INTERVAL_UNIT_MAP];
