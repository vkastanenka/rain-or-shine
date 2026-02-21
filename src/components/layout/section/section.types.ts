import { type ResponsiveValue } from "@/utils";
import { SECTION_PADDING_MAP } from "./section.constants";
import { type ContainerProps } from "../container";

export type SectionPaddingMapKey = keyof typeof SECTION_PADDING_MAP;
export type SectionPaddingMapValue =
  (typeof SECTION_PADDING_MAP)[keyof typeof SECTION_PADDING_MAP];

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerProps["maxWidth"];
  px?: ContainerProps["px"];
  py?: ResponsiveValue<SectionPaddingMapKey>;
  children: React.ReactNode;
}
