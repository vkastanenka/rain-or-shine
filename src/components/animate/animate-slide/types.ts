import type { HTMLDivProps } from "@/types";
import type { ValueKeyframesDefinition } from "framer-motion";

export interface AnimateSlideProps extends HTMLDivProps {
  children: React.ReactNode;
  translateXStart?: ValueKeyframesDefinition;
  translateXEnd?: ValueKeyframesDefinition;
  translateYStart?: ValueKeyframesDefinition;
  translateYEnd?: ValueKeyframesDefinition;
}
