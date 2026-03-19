import { forwardRef } from "react";
import { motion } from "framer-motion";
import { type AnimateExpandProps } from "./types";

export const AnimateExpand = forwardRef(
  (
    {
      children,
      isOpen,
      transformOrigin = "top", // TODO: Allow for horizontal expansion
      className,
    }: AnimateExpandProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { type: "spring", duration: 0.4, bounce: 0 },
          opacity: { duration: 0.25 },
        }}
        layout
        style={{
          transformOrigin,
          overflow: isOpen ? "auto" : "hidden", // TODO: onAnimationEnd?
        }}
        className={className}
      >
        <motion.div layout="position">{children}</motion.div>
      </motion.div>
    );
  },
);
