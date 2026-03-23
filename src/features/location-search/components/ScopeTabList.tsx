import { FcGlobe } from "@react-icons/all-files/fc/FcGlobe";
import {
  Button,
  LazyCountryFlagIcon,
  type CountryFlagIconName,
} from "@/components";
import { cn } from "@/utils";
import { QUERY_SCOPE_MAP } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import type { ScopeButtonProps } from "../types";

const ScopeButton = ({ scope, isActive, onClick }: ScopeButtonProps) => {
  const { locality } = useSearchState();

  const Icon =
    scope === "local" ? (
      <LazyCountryFlagIcon
        name={locality?.countryCode as CountryFlagIconName}
      />
    ) : (
      <FcGlobe />
    );

  return (
    <Button
      size={{ base: "xs", sm: "md" }}
      onClick={onClick}
      className={cn(
        "tab transition-all",
        isActive ? "tab-active" : "opacity-70 hover:opacity-100",
      )}
    >
      {Icon}
    </Button>
  );
};

export const ScopeTabList = () => {
  const { queryScope, locality } = useSearchState();
  const { handleQueryScopeChange } = useSearchActions();
  return (
    <div role="tablist" className="tabs tabs-box">
      {locality?.countryCode && (
        <ScopeButton
          scope={QUERY_SCOPE_MAP.local}
          isActive={queryScope === QUERY_SCOPE_MAP.local}
          onClick={() => handleQueryScopeChange(QUERY_SCOPE_MAP.local)}
        />
      )}
      <ScopeButton
        scope={QUERY_SCOPE_MAP.global}
        isActive={queryScope === QUERY_SCOPE_MAP.global}
        onClick={() => handleQueryScopeChange(QUERY_SCOPE_MAP.global)}
      />
    </div>
  );
};
