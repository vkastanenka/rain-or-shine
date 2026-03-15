import type { MapKey, MapValue } from "@/types";
import { FORECAST_PERIOD_MAP } from "./constants";

export type ForecastPeriodMapKey = MapKey<typeof FORECAST_PERIOD_MAP>;
export type ForecastPeriodMapValue = MapValue<typeof FORECAST_PERIOD_MAP>;
