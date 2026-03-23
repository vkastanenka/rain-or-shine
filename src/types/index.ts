export type UnwrapArray<T> = T extends (infer U)[] ? U : T;

export type MapKey<T> = keyof T;
export type MapValue<T> = T[keyof T];

export interface GeolocationCoordinates {
  longitude: number;
  latitude: number;
}

export type Ref<T> = React.Ref<T | null> | undefined;

export type AnchorRef = React.Ref<HTMLAnchorElement | null> | undefined;
export type ButtonRef = React.Ref<HTMLButtonElement | null> | undefined;
