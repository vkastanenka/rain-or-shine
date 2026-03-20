import { Button } from "../button";
import { NAV_BUTTON_VARIANT_MAP } from "./constants";
import { type NavButtonProps } from "./type";

export const NavButton = ({
  children,
  ariaLabel,
  variant = NAV_BUTTON_VARIANT_MAP.text,
  onClick,
  ...props
}: NavButtonProps) => {
  const isText = variant === NAV_BUTTON_VARIANT_MAP.text;

  return (
    <Button
      aria-label={ariaLabel}
      variant="ghost"
      shape={isText ? undefined : "circle"}
      size={
        isText ? { base: "md", lg: "lg" } : { base: "sm", sm: "md", lg: "lg" }
      }
      className="button-ghost-neutral"
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
