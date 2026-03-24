import { forwardRef } from "react";
import { motion } from "framer-motion";
import { type AnimateSlideProps } from "./types";

export const AnimateSlide = forwardRef(
  (
    {
      children,
      className,
      translateXStart,
      translateXEnd,
      translateYStart,
      translateYEnd,
    }: AnimateSlideProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={{ translateX: translateXStart, translateY: translateYStart }}
        animate={{
          translateX: translateXEnd,
          translateY: translateYEnd,
        }}
        exit={{ translateX: translateXStart, translateY: translateYStart }}
        transition={{
          translateX: { type: "spring", duration: 0.3, bounce: 0 },
          translateY: { type: "spring", duration: 0.3, bounce: 0 },
        }}
        layout
        className={className}
      >
        <motion.div layout="position">{children}</motion.div>
      </motion.div>
    );
  },
);
