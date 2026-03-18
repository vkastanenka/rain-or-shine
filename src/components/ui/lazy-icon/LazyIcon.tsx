import React, { lazy, Suspense, useMemo, useState } from "react";
import { FaFlag, FaTimes } from "react-icons/fa";
import { cn } from "@/utils";
import type {
  LazyIconBaseProps,
  LazyCountryFlagIconProps,
  LazyReactIconProps,
  LazyErikFlowersWeatherIconProps,
  LazyMeteoconIconProps,
} from "./types";

const iconCache: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {};

const loadedIcons = new Set<string>();

const defaultFallbackIconFn = () => ({ default: () => <FaTimes /> });

const LazyIconBase = ({
  cacheKey,
  importFn,
  className,
  ...props
}: LazyIconBaseProps) => {
  const [hasAnimated, setHasAnimated] = useState(loadedIcons.has(cacheKey));

  const IconComponent = useMemo(() => {
    if (!iconCache[cacheKey]) {
      iconCache[cacheKey] = lazy(importFn);
    }
    return iconCache[cacheKey];
  }, [cacheKey, importFn]);

  const layoutClasses =
    "w-4 aspect-square shrink-0 align-middle inline-flex items-center justify-center";

  return (
    <Suspense
      fallback={
        <div
          className={cn(
            layoutClasses,
            "rounded-sm animate-pulse bg-base-300",
            className,
          )}
        />
      }
    >
      <div
        className={cn(
          layoutClasses,
          !hasAnimated && "animate-fade-in",
          className,
        )}
        onAnimationEnd={() => {
          loadedIcons.add(cacheKey);
          setHasAnimated(true);
        }}
      >
        <IconComponent className="w-full h-full block" {...props} />
      </div>
    </Suspense>
  );
};

export const LazyCountryFlagIcon = ({
  name,
  className,
  ...props
}: LazyCountryFlagIconProps) => (
  <LazyIconBase
    cacheKey={`country-flag-${name}`}
    importFn={() =>
      import(`@country-flag-icons/${name}/index.js`).catch(() => ({
        default: () => <FaFlag />,
      }))
    }
    className={cn("aspect-3/2", className)}
    {...props}
  />
);

export const LazyReactIcon = ({ name, lib, ...props }: LazyReactIconProps) => (
  <LazyIconBase
    cacheKey={`ri-${lib}-${name}`}
    importFn={() =>
      import(`@react-icons/${lib}/index.mjs`)
        .then((module) => ({ default: module[name] }))
        .catch(defaultFallbackIconFn)
    }
    {...props}
  />
);

export const LazyErikFlowersWeatherIcon = ({
  name,
  className,
  ...props
}: LazyErikFlowersWeatherIconProps) => (
  <LazyIconBase
    cacheKey={`ef-weather-${name}`}
    importFn={() =>
      import(`@erikflowers-weather-icons`)
        .then((module) => ({ default: module[name] }))
        .catch(defaultFallbackIconFn)
    }
    className={cn("fill-current", className)}
    {...props}
  />
);

export const LazyMeteoconIcon = ({ name, ...props }: LazyMeteoconIconProps) => (
  <LazyIconBase
    cacheKey={`meteocon-${name}`}
    importFn={() =>
      import(`@meteocons`)
        .then((module) => ({ default: module[name] }))
        .catch(defaultFallbackIconFn)
    }
    {...props}
  />
);
