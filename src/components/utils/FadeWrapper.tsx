import { useState, useEffect } from "react";
import { cn } from "@/utils";

export const FadeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "transition-opacity duration-500 ease-in-out",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
};
