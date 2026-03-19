import { type MotionStyle } from "framer-motion";

export interface AnimateExpandProps {
  children: React.ReactNode;
  isOpen: boolean;
  transformOrigin?: MotionStyle["transformOrigin"];
  className?: string;
}
