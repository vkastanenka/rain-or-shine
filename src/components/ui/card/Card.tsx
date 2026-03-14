import { cn } from "@/utils";

export const Card = ({
  children,
  className,
  fit,
  pad,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  fit?: boolean;
  pad?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-base-300",
        "rounded-lg",
        "overflow-hidden",
        "shadow-2xl",
        fit && "w-full",
        pad && "p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
