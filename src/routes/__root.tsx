import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { UseQueryResult } from "@tanstack/react-query";
import { Navbar } from "@/components";
import type { ReverseGeocodeResponse } from "@/services/big-data-cloud/types";

type QueryResult<T> = UseQueryResult<T, Error>;

interface MyRouterContext {
  location?: QueryResult<ReverseGeocodeResponse>;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  // errorComponent: ({ error }) => <LocationErrorFallback error={error} />,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}
