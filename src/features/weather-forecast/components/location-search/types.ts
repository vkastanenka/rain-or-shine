import { type TextInputSizeMapKey } from "@/components";
import type { MapKey, MapValue } from "@/types";
import { type ResponsiveValue } from "@/utils";
import { useLocationSearchContext } from "./hooks";
import { QUERY_COUNT_MAP, QUERY_SCOPE_MAP } from "./constants";

/**
 * Context
 */

type LocationSearchContext = ReturnType<typeof useLocationSearchContext>;
export type LocationSearchState = LocationSearchContext["state"];
export type LocationSearchActions = LocationSearchContext["actions"];

/**
 * Query
 */

export type QueryCountMapKey = MapKey<typeof QUERY_COUNT_MAP>;
export type QueryCountMapValue = MapValue<typeof QUERY_COUNT_MAP>;

export type QueryScopeMapKey = MapKey<typeof QUERY_SCOPE_MAP>;
export type QueryScopeMapValue = MapValue<typeof QUERY_SCOPE_MAP>;

/**
 * Components
 */

export interface LocationSearchProps {
  size?: ResponsiveValue<TextInputSizeMapKey>;
  className?: string;
}
