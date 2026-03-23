import { cn, resolveResponsiveValues } from "@/utils";
import { TEXT_TYPE_MAP } from "./constants";
import { type TextProps } from "./types";

export const Text = ({
  element: Component = "p",
  type = "body1",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component
      className={cn(resolveResponsiveValues(type, TEXT_TYPE_MAP), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
