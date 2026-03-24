import type { HTMLDivProps, MapKey, MapValue } from "@/types";
import { type ResponsiveValue } from "@/utils";
import { CONTAINER_PADDING_MAP, CONTAINER_WIDTH_MAP } from "./constants";

/**
 * Constants
 */

export type ContainerPaddingMapKey = MapKey<typeof CONTAINER_PADDING_MAP>;
export type ContainerPaddingMapValue = MapValue<typeof CONTAINER_PADDING_MAP>;

export type ContainerWidthMapKey = MapKey<typeof CONTAINER_WIDTH_MAP>;
export type ContainerWidthMapValue = MapValue<typeof CONTAINER_WIDTH_MAP>;

/**
 * Components
 */

export interface ContainerProps extends HTMLDivProps {
  children: React.ReactNode;
  center?: boolean;
  maxWidth?: ResponsiveValue<ContainerWidthMapKey>;
  px?: ResponsiveValue<ContainerPaddingMapKey>;
}
