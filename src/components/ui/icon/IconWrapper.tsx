import { forwardRef } from "react";
import { cn } from "@/utils";
import { type IconProps } from "./icon.types";

export const IconWrapper = (
  SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>,
) => {
  return forwardRef<SVGSVGElement, IconProps>(
    ({ size, className, style, ...props }, ref) => {
      const containerSize = size
        ? typeof size === "number"
          ? `${size}px`
          : size
        : undefined;

      return (
        <div
          className={cn(
            "inline-block shrink-0",
            !size && !className?.includes("w-") && "w-6 h-6",
            className,
          )}
          style={{
            width: containerSize,
            height: containerSize,
            ...style,
          }}
        >
          <SVGComponent
            ref={ref}
            width="100%"
            height="100%"
            className="block"
            {...props}
          />
        </div>
      );
    },
  );
};
