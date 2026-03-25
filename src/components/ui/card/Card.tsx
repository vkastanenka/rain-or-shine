import type { HTMLDivProps } from "@/types";
import { cn } from "@/utils";

export const Card = ({
  children,
  className,
  padding,
  isHover3d,
  isGlass,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
  isHover3d?: boolean;
  isGlass?: boolean;
} & HTMLDivProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-300",

        !isGlass && "bg-base-300 shadow-md",

        isGlass && [
          "bg-white/10 dark:bg-black/20",
          "backdrop-blur-md",
          "border border-white/20",
          "shadow-xl",
        ],

        padding && "p-4",
        isHover3d && "hover-3d",
        className,
      )}
      {...props}
    >
      <div className="relative z-5">{children}</div>
      {isHover3d && <HoverLayers />}
    </div>
  );
};

const HoverLayers = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    {[...Array(8)].map((_, i) => (
      <div key={i} />
    ))}
  </div>
);
