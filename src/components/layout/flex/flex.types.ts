import { type ResponsiveValue } from "@/utils";
import {
  FLEX_ALIGN_MAP,
  FLEX_DIRECTION_MAP,
  FLEX_GAP_MAP,
  FLEX_JUSTIFY_MAP,
} from "./flex.constants";

export type FlexAlignMapKey = keyof typeof FLEX_ALIGN_MAP;
export type FlexAlignMapValue =
  (typeof FLEX_ALIGN_MAP)[keyof typeof FLEX_ALIGN_MAP];

export type FlexDirectionMapKey = keyof typeof FLEX_DIRECTION_MAP;
export type FlexDirectionMapValue =
  (typeof FLEX_DIRECTION_MAP)[keyof typeof FLEX_DIRECTION_MAP];

export type FlexGapMapKey = keyof typeof FLEX_GAP_MAP;
export type FlexGapMapValue = (typeof FLEX_GAP_MAP)[keyof typeof FLEX_GAP_MAP];

export type FlexJustifyMapKey = keyof typeof FLEX_JUSTIFY_MAP;
export type FlexJustifyMapValue =
  (typeof FLEX_JUSTIFY_MAP)[keyof typeof FLEX_JUSTIFY_MAP];

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResponsiveValue<FlexDirectionMapKey>;
  justify?: ResponsiveValue<FlexJustifyMapKey>;
  align?: ResponsiveValue<FlexAlignMapKey>;
  gap?: ResponsiveValue<FlexGapMapKey>;
  wrap?: ResponsiveValue<boolean>;
  children: React.ReactNode;
}
