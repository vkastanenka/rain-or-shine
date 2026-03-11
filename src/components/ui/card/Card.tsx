import { cn } from "@/utils";

export const Card = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-base-200",
        "border-base-300",
        "rounded-lg",
        "overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
