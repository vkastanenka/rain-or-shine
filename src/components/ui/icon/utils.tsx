import { forwardRef, type ComponentType, type SVGProps } from "react";
import type { DivRef } from "@/types";
import { IconContainer } from "./IconContainer";
import { type IconContainerProps } from "./types";
import { iconComponentStyles } from "./constants";

export const createIcon = (Svg: ComponentType<SVGProps<SVGSVGElement>>) => {
  return forwardRef((props: IconContainerProps, ref: DivRef) => (
    <IconContainer ref={ref} {...props}>
      <Svg className={iconComponentStyles} />
    </IconContainer>
  ));
};
