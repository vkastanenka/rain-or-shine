import { forwardRef, type ComponentType, type SVGProps } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import type { DivRef, HTMLDivProps } from "@/types";
import { IconContainer } from "./IconContainer";
import { iconComponentStyles } from "./constants";

export const createIcon = (Svg: ComponentType<SVGProps<SVGSVGElement>>) => {
  return forwardRef((props: HTMLDivProps, ref: DivRef) => (
    <IconContainer ref={ref} {...props}>
      <Svg className={iconComponentStyles} />
    </IconContainer>
  ));
};

export const defaultFallbackIconFn = () => ({ default: () => <FaTimes /> });
