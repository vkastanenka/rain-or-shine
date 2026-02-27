import {
  FORECAST_SHARED_LABELS_MAP,
  FORECAST_TIME_PERIOD_LABELS_MAP,
  FORECAST_TIME_PERIOD_MAP,
  FORECAST_LABELS_MAP,
} from "./constants";

export type ForecastSharedLabelsMapKey =
  keyof typeof FORECAST_SHARED_LABELS_MAP;
export type ForecastSharedLabelsMapValue =
  (typeof FORECAST_SHARED_LABELS_MAP)[keyof typeof FORECAST_SHARED_LABELS_MAP];

export type ForecastTimePeriodLabelsMapKey =
  keyof typeof FORECAST_TIME_PERIOD_LABELS_MAP;
export type ForecastTimePeriodLabelsMapValue =
  (typeof FORECAST_TIME_PERIOD_LABELS_MAP)[keyof typeof FORECAST_TIME_PERIOD_LABELS_MAP];

export type ForecastTimePeriodMapKey = keyof typeof FORECAST_TIME_PERIOD_MAP;
export type ForecastTimePeriodMapValue =
  (typeof FORECAST_TIME_PERIOD_MAP)[keyof typeof FORECAST_TIME_PERIOD_MAP];

export type ForecastForecastLabelsMapKey = keyof typeof FORECAST_LABELS_MAP;
export type ForecastForecastLabelsMapValue =
  (typeof FORECAST_LABELS_MAP)[keyof typeof FORECAST_LABELS_MAP];
