import { FcGlobe } from "react-icons/fc";
import { LazyCountryFlagIcon, type CountryFlagIconName } from "@/components";
import { cn } from "@/utils";
import { QUERY_SCOPE_MAP } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import type { ScopeButtonProps } from "../types";

const ScopeButton = ({ scope, isActive, onClick }: ScopeButtonProps) => {
  const { locality } = useSearchState();

  const Icon =
    scope === "local" ? (
      <LazyCountryFlagIcon
        name={locality?.countryCode as CountryFlagIconName} // TODO: Handle better
      />
    ) : (
      <FcGlobe />
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "tab transition-all",
        isActive ? "tab-active" : "opacity-70 hover:opacity-100",
      )}
    >
      {Icon}
    </button>
  );
};

export const ScopeTabList = () => {
  const { queryScope } = useSearchState();
  const { setQueryScope } = useSearchActions();
  return (
    <div role="tablist" className="tabs tabs-box">
      <ScopeButton
        scope={QUERY_SCOPE_MAP.local}
        isActive={queryScope === QUERY_SCOPE_MAP.local}
        onClick={() => setQueryScope(QUERY_SCOPE_MAP.local)}
      />
      <ScopeButton
        scope={QUERY_SCOPE_MAP.global}
        isActive={queryScope === QUERY_SCOPE_MAP.global}
        onClick={() => setQueryScope(QUERY_SCOPE_MAP.global)}
      />
    </div>
  );
};
