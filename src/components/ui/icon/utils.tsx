import { forwardRef, type ComponentType, type SVGProps } from "react";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
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

export const fallbackIconFn = () => ({ default: () => <FaMinus /> });
