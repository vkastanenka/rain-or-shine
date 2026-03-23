import { cn, resolveResponsiveValues } from "@/utils";
import {
  BUTTON_SIZE_MAP,
  BUTTON_COLOR_MAP,
  BUTTON_VARIANT_MAP,
  BUTTON_SHAPE_MAP,
  BUTTON_DISPLAY_MAP,
} from "./constants";
import type { ButtonStyleProps } from "./types";

export const getButtonStyles = <T extends ButtonStyleProps>(props: T) => {
  const { size, color, variant, shape, display, unstyled, className, ...rest } =
    props;

  const styles = !unstyled
    ? cn(
        "btn",
        size && resolveResponsiveValues(size, BUTTON_SIZE_MAP),
        color && resolveResponsiveValues(color, BUTTON_COLOR_MAP),
        variant && resolveResponsiveValues(variant, BUTTON_VARIANT_MAP),
        shape && resolveResponsiveValues(shape, BUTTON_SHAPE_MAP),
        display && resolveResponsiveValues(display, BUTTON_DISPLAY_MAP),
        className,
      )
    : cn("bg-transparent border-none p-0 appearance-none", className);

  return { styles, rest };
};
