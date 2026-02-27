import { MEASUREMENT_LABELS_MAP } from "@/constants";

export type UnwrapArray<T> = T extends (infer U)[] ? U : T;

export type MeasurementLabelsMapKey = keyof typeof MEASUREMENT_LABELS_MAP;
export type MeasurementLabelsMapValue =
  (typeof MEASUREMENT_LABELS_MAP)[keyof typeof MEASUREMENT_LABELS_MAP];