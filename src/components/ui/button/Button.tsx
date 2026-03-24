import { forwardRef } from "react";
import { Link } from "@tanstack/react-router";
import type { AnchorRef, ButtonRef } from "@/types";
import type { ButtonProps, ButtonLinkProps, ButtonAnchorProps } from "./types";
import { getButtonStyles } from "./utils";

export const Button = forwardRef((props: ButtonProps, ref: ButtonRef) => {
  const { styles, rest } = getButtonStyles(props);
  return <button ref={ref} type="button" className={styles} {...rest} />;
});

export const ButtonLink = forwardRef(
  (
    { to, showActive, activeProps, ...props }: ButtonLinkProps,
    ref: AnchorRef,
  ) => {
    const { styles, rest } = getButtonStyles(props);
    return (
      <Link
        ref={ref}
        to={to}
        className={styles}
        activeProps={{
          ...(showActive && { className: "btn-active" }),
          ...activeProps,
        }}
        {...rest}
      />
    );
  },
);

export const ButtonAnchor = forwardRef(
  ({ href, ...props }: ButtonAnchorProps, ref: AnchorRef) => {
    const { styles, rest } = getButtonStyles(props);
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...rest}
      />
    );
  },
);
