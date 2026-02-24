import {
  type OpenMeteoWeatherForecastResponse,
  type OpenMeteoWeatherForecastTimeIntervalVariablesKey,
} from "./open-meteo.types";

export type MeteoValueWithUnit<V> = {
  value: V;
  unit: string | null;
};

export function transformOpenMeteoWeatherForecastResponseTimeInterval<
  T extends OpenMeteoWeatherForecastTimeIntervalVariablesKey,
  K extends keyof NonNullable<OpenMeteoWeatherForecastResponse[T]> =
    keyof NonNullable<OpenMeteoWeatherForecastResponse[T]>,
>(
  data: OpenMeteoWeatherForecastResponse,
  timeIntervalKey: T,
  keysToExtract?: K[],
): Array<{
  [P in K]: NonNullable<
    OpenMeteoWeatherForecastResponse[T]
  >[P] extends (infer U)[]
    ? U
    : NonNullable<OpenMeteoWeatherForecastResponse[T]>[P];
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
