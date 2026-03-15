import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FcGlobe } from "react-icons/fc";
import { FaFlag } from "react-icons/fa";
import { FlexCol, FlexRow, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import {
  type LocationSearchSuggestionsProps,
  type LocationSearchSuggestionsLinkProps,
  type LocationSearchResultsHeaderProps,
} from "./types";
import { cn } from "@/utils";

const HEADER_PADDING = "p-4";
const HEADER_BG_COLOR = "bg-neutral";

const Header = ({ children }: { children: React.ReactNode }) => (
  <div className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR, "py-7")}>
    <Text>{children}</Text>
  </div>
);

const flagCache: Record<string, any> = {};
const animatedFlags = new Set<string>();

const Flag = ({ code }: { code?: string }) => {
  console.log("FLAG", code);

  const flagCode = code?.toUpperCase();

  if (!flagCode) return <FaFlag className="w-4" />;

  if (!flagCache[flagCode]) {
    flagCache[flagCode] = lazy(() =>
      // Clean, aliased path. Vite handles the resolution behind the scenes.
      import(`@flags/${flagCode}/index.js`).catch(() => ({
        default: () => <FaFlag />,
      })),
    );
  }

  const CachedFlag = flagCache[flagCode];

  const shouldAnimate = !animatedFlags.has(flagCode);

  return (
    <Suspense fallback={<div className="w-4 h-3 bg-base-300 animate-pulse" />}>
      <div
        className={cn(shouldAnimate && "animate-fade-in")}
        onAnimationEnd={() => animatedFlags.add(flagCode)}
      >
        <CachedFlag className="w-4" />
      </div>
    </Suspense>
  );
};

const LocationResultsHeader = ({
  children,
  className,
  currentCountryCode,
  scopeIsGlobal,
  toggleScopeIsGlobal,
}: LocationSearchResultsHeaderProps) => {
  return (
    <FlexRow
      fit
      gap={2}
      align="center"
      justify="between"
      className={cn(HEADER_PADDING, HEADER_BG_COLOR, className)}
    >
      <Text>{children}</Text>
      <div role="tablist" className="tabs tabs-box">
        <button
          type="button"
          className={cn(
            "tab",
            !scopeIsGlobal && "tab-active",
            scopeIsGlobal && "opacity-70",
            scopeIsGlobal && "hover:opacity-100",
            "transition-all",
          )}
          onClick={() => scopeIsGlobal && toggleScopeIsGlobal()}
        >
          <Flag code={currentCountryCode} />
        </button>
        <button
          type="button"
          className={cn(
            "tab",
            scopeIsGlobal && "tab-active",
            !scopeIsGlobal && "opacity-70",
            !scopeIsGlobal && "hover:opacity-100",
            "transition-all",
          )}
          onClick={() => !scopeIsGlobal && toggleScopeIsGlobal()}
        >
          <FcGlobe />
        </button>
      </div>
    </FlexRow>
  );
};

export const LocLinks = ({
  results,
  onClickSuggestion,
}: LocationSearchSuggestionsLinkProps) => {
  return (
    <>
      {results.map((loc) => (
        <Link
          key={loc.id}
          to={formatWeatherUrlPath(
            loc.country_code,
            loc.admin1,
            loc.name,
            FORECAST_PERIOD_MAP.current,
          )}
          className="input-suggestions-link"
          onClick={() => onClickSuggestion(loc)}
        >
          <Text type="large" className="font-medium">
            {loc.name}
          </Text>
          <Text className="opacity-70">
            {loc.admin1}, {loc.country}
          </Text>
        </Link>
      ))}
    </>
  );
};

export const LocationSearchSuggestions = ({
  debouncedQuery,
  isLoading,
  results,
  recentLocations,
  listIsOpen,
  onClickSuggestion,
  currentCountryCode,
  scopeIsGlobal,
  toggleScopeIsGlobal,
}: LocationSearchSuggestionsProps) => {
  const recentLocationsComponent =
    recentLocations && recentLocations.length > 0 ? (
      <FlexCol>
        <Header>{LABELS.recentLocations}</Header>
        <LocLinks
          results={recentLocations}
          onClickSuggestion={onClickSuggestion}
        />
      </FlexCol>
    ) : null;

  const locationResultsComponent = isLoading ? (
    <Header>{LABELS.isLoadingMessage}</Header>
  ) : (
    <FlexCol>
      <LocationResultsHeader
        currentCountryCode={currentCountryCode}
        scopeIsGlobal={scopeIsGlobal}
        toggleScopeIsGlobal={toggleScopeIsGlobal}
      >
        {LABELS.locations}
      </LocationResultsHeader>
      {results && results.length > 0 ? (
        <LocLinks results={results} onClickSuggestion={onClickSuggestion} />
      ) : (
        <div className={cn("w-full", HEADER_PADDING, "py-7")}>
          <Text>
            {!debouncedQuery ? LABELS.searchToFind : LABELS.noLocationsFound}
          </Text>
        </div>
      )}
    </FlexCol>
  );

  return (
    <AnimatePresence>
      {listIsOpen && (
        <motion.div
          key="location-suggestions-panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: "spring", duration: 0.5, bounce: 0 },
            opacity: { duration: 0.2 },
          }}
          layout
          style={{ transformOrigin: "top" }}
          className="input-suggestions-container overflow-hidden"
        >
          {/* Change layout="position" to just layout. 
    This helps the parent measure the delta more accurately 
    during the loading -> results swap.
  */}
          <motion.div layout="position" className="flex flex-col w-full">
            {recentLocationsComponent}
            {locationResultsComponent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
