import { lazy, Suspense } from "react";
import { FaFlag } from "react-icons/fa";
import { cn } from "@/utils";

const flagCache: Record<string, any> = {};
const animatedFlags = new Set<string>();

export const LocationSearchFlag = ({ code }: { code?: string }) => {
  const flagCode = code?.toUpperCase();

  if (!flagCode) return <FaFlag className="w-4" />;

  if (!flagCache[flagCode]) {
    flagCache[flagCode] = lazy(() =>
      import(`@flags/${flagCode}/index.js`).catch(() => ({
        default: () => <FaFlag />,
      })),
    );
  }

  const CachedFlag = flagCache[flagCode];
  const shouldAnimate = !animatedFlags.has(flagCode);

  return (
    <Suspense fallback={<div className="w-4 h-4 animate-pulse" />}>
      <div
        className={cn(shouldAnimate && "animate-fade-in")}
        onAnimationEnd={() => animatedFlags.add(flagCode)}
      >
        <CachedFlag className="w-4" />
      </div>
    </Suspense>
  );
};
