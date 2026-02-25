import {
  type OpenMeteoForecastResponse,
  type OpenMeteoTimeIntervalMapValue,
} from "../types";

export function normalizeOpenMeteoForecastTimeInterval<
  T extends OpenMeteoTimeIntervalMapValue,
  K extends keyof NonNullable<OpenMeteoForecastResponse[T]> = keyof NonNullable<
    OpenMeteoForecastResponse[T]
  >,
>(
  data: OpenMeteoForecastResponse,
  timeIntervalKey: T,
  keysToExtract?: K[],
): Array<{
  [P in K]: NonNullable<OpenMeteoForecastResponse[T]>[P] extends (infer U)[]
    ? U
    : NonNullable<OpenMeteoForecastResponse[T]>[P];
}> {
  const group = data[timeIntervalKey];

  if (!group) return [];

  const finalKeys = (keysToExtract ?? Object.keys(group)) as K[];

  const timeArray = Array.isArray((group as any).time)
    ? (group as any).time
    : [(group as any).time];

  return timeArray.map((_: any, index: number) => {
    const item = {} as any;

    finalKeys.forEach((key) => {
      const val = (group as any)[key];

      item[key] = Array.isArray(val) ? val[index] : val;
    });

    return item;
  });
}
