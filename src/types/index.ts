import { QueryClient } from "@tanstack/react-query";

export type UnwrapArray<T> = T extends (infer U)[] ? U : T;

export type MapKey<T> = keyof T;
export type MapValue<T> = T[keyof T];

export interface GeolocationCoordinates {
  longitude: number;
  latitude: number;
}

export interface RouterContext {
  queryClient: QueryClient;
}
