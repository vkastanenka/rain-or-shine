import type { HTMLMotionProps, ValueKeyframesDefinition } from "framer-motion";

export interface AnimateSlideProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  translateXStart?: ValueKeyframesDefinition;
  translateXEnd?: ValueKeyframesDefinition;
  translateYStart?: ValueKeyframesDefinition;
  translateYEnd?: ValueKeyframesDefinition;
}
