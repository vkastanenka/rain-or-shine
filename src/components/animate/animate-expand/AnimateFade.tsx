import { forwardRef } from "react";
import { motion } from "framer-motion";
import { type AnimateFadeProps } from "./types";

export const AnimateFade = forwardRef(
  (
    { key, duration = 0.3, children, className }: AnimateFadeProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <motion.div
        key={key}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration }}
        className={className}
      >
        {children}
      </motion.div>
    );
  },
);
