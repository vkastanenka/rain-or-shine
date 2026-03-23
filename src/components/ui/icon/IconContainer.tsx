import { forwardRef } from "react";
import { cn } from "@/utils";
import type { DivRef } from "@/types";
import { iconContainerStyles } from "./constants";
import { type IconContainerProps } from "./types";

export const IconContainer = forwardRef(
  ({ children, className }: IconContainerProps, ref: DivRef) => {
    return (
      <div ref={ref} className={cn(iconContainerStyles, className)}>
        {children}
      </div>
    );
  },
);
