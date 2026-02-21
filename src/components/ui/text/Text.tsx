import { cn } from "@/utils";
import { TEXT_TYPE_MAP } from "./text.constants";
import { type TextProps } from "./text.types";

export const Text = ({
  element: Component = "p",
  type = "body1",
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={cn(TEXT_TYPE_MAP[type], className)} {...props}>
      {children}
    </Component>
  );
};
