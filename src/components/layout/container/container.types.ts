import { type ResponsiveValue } from "@/utils";
import {
  CONTAINER_PADDING_MAP,
  CONTAINER_WIDTH_MAP,
} from "./container.constants";

export type ContainerPaddingMapKey = keyof typeof CONTAINER_PADDING_MAP;
export type ContainerPaddingMapValue =
  (typeof CONTAINER_PADDING_MAP)[keyof typeof CONTAINER_PADDING_MAP];

export type ContainerWidthMapKey = keyof typeof CONTAINER_WIDTH_MAP;
export type ContainerWidthMapValue =
  (typeof CONTAINER_WIDTH_MAP)[keyof typeof CONTAINER_WIDTH_MAP];

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  maxWidth?: ResponsiveValue<ContainerWidthMapKey>;
  px?: ResponsiveValue<ContainerPaddingMapKey>;
  children: React.ReactNode;
}
