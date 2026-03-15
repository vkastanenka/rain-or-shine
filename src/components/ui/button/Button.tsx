import { Link } from "@tanstack/react-router";
import { cn, resolveResponsiveValues } from "@/utils";
import {
  BUTTON_SIZE_MAP,
  BUTTON_COLOR_MAP,
  BUTTON_VARIANT_MAP,
  BUTTON_SHAPE_MAP,
  BUTTON_DISPLAY_MAP,
} from "./button.constants";
import { type ButtonProps } from "./button.types";

export const Button = ({
  children,
  className,
  size,
  color,
  variant,
  shape,
  display,
  unstyled = false,
  ...props
}: ButtonProps) => {
  const combinedClasses = !unstyled
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

  // Common wrapper logic
  const renderContent = () => <>{children}</>;

  if ("href" in props) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {renderContent()}
      </a>
    );
  }

  if ("to" in props) {
    return (
      <Link {...props} className={combinedClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button disabled={props.disabled} onClick={props.onClick} className={combinedClasses} type="button">
      {renderContent()}
    </button>
  );
};
