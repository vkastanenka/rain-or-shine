import { type UnwrapArray } from "@/types";
import { type ForecastResponse, type TimeIntervalMapValue } from "../types";

export function normalizeForecastTimeInterval<
  T extends TimeIntervalMapValue,
  K extends keyof NonNullable<ForecastResponse[T]>,
>(
  data: ForecastResponse,
  timeIntervalKey: T,
  keysToExtract?: K[],
): Array<{
  [P in K]: UnwrapArray<NonNullable<ForecastResponse[T]>[P]>;
}> {
  const group = data[timeIntervalKey];

  if (!group) return [];

  // 1. Cast keys to K[] once at the start
  const finalKeys = keysToExtract ?? (Object.keys(group) as K[]);

  // 2. Identify the time array to determine length
  const timeArray = Array.isArray(group.time) ? group.time : [group.time];

  return timeArray.map((_, index) => {
    // 3. Use a Record type for the accumulator to avoid 'any'
    const item = {} as {
      [P in K]: UnwrapArray<NonNullable<ForecastResponse[T]>[P]>;
    };

    finalKeys.forEach((key) => {
      // 4. Use a type assertion to allow indexing
      // Tell TS: "Treat 'group' as having keys of type 'K'"
      const val = (group as Record<K, any>)[key];

      if (Array.isArray(val)) {
        (item as any)[key] = val[index];
      } else {
        (item as any)[key] = val;
      }
    });

    return item;
  });
}
