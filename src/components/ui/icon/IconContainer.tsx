import { forwardRef } from "react";
import { cn } from "@/utils";
import type { DivRef, HTMLDivProps } from "@/types";
import { iconContainerStyles } from "./constants";

export const IconContainer = forwardRef(
  ({ children, className }: HTMLDivProps, ref: DivRef) => {
    return (
      <div ref={ref} className={cn(iconContainerStyles, className)}>
        {children}
      </div>
    );
  },
);
