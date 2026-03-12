import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components";
import { useGetLocationByCoords, getLocationByCoordsOptions } from "@/services";

interface RootRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(getLocationByCoordsOptions());
  },
  component: RootComponent,
});

function RootComponent() {
  useGetLocationByCoords();

  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}
