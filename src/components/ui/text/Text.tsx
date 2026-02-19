import { cn } from "@/lib/utils";
import { textTypeMap } from "./text.constants";
import { type TextProps } from "./text.types";

export const Text = ({
  type = "body1",
  element: Component = "p",
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <Component className={cn(textTypeMap[type], className)} {...props}>
      {children}
    </Component>
  );
};
