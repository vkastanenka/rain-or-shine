import type { HTMLDivProps, MapKey, MapValue } from "@/types";
import { type ResponsiveValue } from "@/utils";
import { SECTION_PADDING_MAP } from "./constants";
import { type ContainerProps } from "../container";

/**
 * Constants
 */

export type SectionPaddingMapKey = MapKey<typeof SECTION_PADDING_MAP>;
export type SectionPaddingMapValue = MapValue<typeof SECTION_PADDING_MAP>;

/**
 * Components
 */

export interface SectionProps extends HTMLDivProps {
  children: React.ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
  px?: ContainerProps["px"];
  py?: ResponsiveValue<SectionPaddingMapKey>;
}
