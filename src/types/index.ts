import type { LinkProps } from "@tanstack/react-router";

export interface AppRoute {
  path: LinkProps["to"];
  label: string;
}

export type UnwrapArray<T> = T extends (infer U)[] ? U : T;

export type MapKey<T> = keyof T;
export type MapValue<T> = T[keyof T];

export interface GeolocationCoordinates {
  longitude: number;
  latitude: number;
}

export type HTMLAnchorProps = React.ComponentProps<"a">;
export type HTMLButtonProps = React.ComponentProps<"button">;
export type HTMLDivProps = React.ComponentProps<"div">;
export type HTMLElementProps = React.HTMLAttributes<HTMLElement>;
export type HTMLNavProps = React.ComponentProps<"nav">;

export type Ref<T> = React.Ref<T | null> | undefined;

export type AnchorRef = React.Ref<HTMLAnchorElement | null> | undefined;
export type ButtonRef = React.Ref<HTMLButtonElement | null> | undefined;
export type DivRef = React.Ref<HTMLDivElement | null> | undefined;
