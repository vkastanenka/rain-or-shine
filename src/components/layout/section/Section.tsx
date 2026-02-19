import { cn } from "@/utils";
import { type SectionProps } from "./section.types";

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={cn("w-full py-10", className)}>
      <div className="content-container">{children}</div>
    </section>
  );
};
