import React, { lazy, Suspense, useMemo, useState } from "react";
import { FaFlag } from "@react-icons/all-files/fa/FaFlag";
import { cn } from "@/utils";
import { IconContainer } from "./IconContainer";
import { iconContainerStyles, iconComponentStyles } from "./constants";
import type {
  LazyIconBaseProps,
  LazyCountryFlagIconProps,
  LazyReactIconProps,
  LazyErikFlowersWeatherIconProps,
  LazyMeteoconIconProps,
} from "./types";
import { fallbackIconFn } from "./utils";

const iconCache: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {};

const loadedIcons = new Set<string>();

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

  return (
    <Suspense
      fallback={
        <div
          className={cn(
            iconContainerStyles,
            "aspect-square rounded-sm animate-pulse bg-base-300",
            className,
          )}
        />
      }
    >
      <IconContainer
        className={cn(!hasAnimated && "animate-fade-in", className)}
        onAnimationEnd={() => {
          loadedIcons.add(cacheKey);
          setHasAnimated(true);
        }}
      >
        <IconComponent className={iconComponentStyles} {...props} />
      </IconContainer>
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

export const LazyReactIcon = ({ lib, name, ...props }: LazyReactIconProps) => (
  <LazyIconBase
    cacheKey={`ri-${lib}-${name}`}
    importFn={() =>
      import(`@react-icons-all-files/${lib}/${name}.esm.js`)
        .then((module) => ({ default: module[name] }))
        .catch(fallbackIconFn)
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
      import(`@erikflowers-weather-icons/${name}.tsx`)
        .then((module) => ({ default: module[name] }))
        .catch(fallbackIconFn)
    }
    className={cn("fill-current", className)}
    {...props}
  />
);

export const LazyMeteoconIcon = ({
  lib,
  name,
  ...props
}: LazyMeteoconIconProps) => (
  <LazyIconBase
    cacheKey={`meteocon-${name}`}
    importFn={() =>
      import(`@meteocons/${lib}/${name}.tsx`)
        .then((module) => ({ default: module[name] }))
        .catch(fallbackIconFn)
    }
    {...props}
  />
);
