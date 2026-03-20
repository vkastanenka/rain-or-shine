import { forwardRef } from "react";
import { motion } from "framer-motion";
import { type AnimateExpandProps } from "./types";

export const AnimateExpand = forwardRef(
  (
    { key, children, isOpen, className, onClose }: AnimateExpandProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <motion.div
        key={key}
        ref={ref}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        onAnimationComplete={() => {
          onClose?.();
        }}
        transition={{
          height: { type: "spring", duration: 0.3, bounce: 0 },
          opacity: { duration: 0.25 },
        }}
        layout
        style={{
          transformOrigin: "top",
          overflow: isOpen ? "auto" : "hidden",
        }}
        className={className}
      >
        <motion.div layout="position">{children}</motion.div>
      </motion.div>
    );
  },
);
