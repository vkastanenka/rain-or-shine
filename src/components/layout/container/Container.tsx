import { cn, resolveResponsiveValues } from "@/utils";
import {
  CONTAINER_PADDING_MAP,
  CONTAINER_WIDTH_MAP,
} from "./container.constants";
import { type ContainerProps } from "./container.types";

export const Container = ({
  center = true,
  maxWidth,
  px = { base: 4 },
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full",
        center && "mx-auto",
        maxWidth
          ? resolveResponsiveValues(maxWidth, CONTAINER_WIDTH_MAP)
          : "container",
        resolveResponsiveValues(px, CONTAINER_PADDING_MAP),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
