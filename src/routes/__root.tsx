import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components";
import { useGetLocalityByCoords, getLocalityByCoordsOptions } from "@/services";

interface RootRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(getLocalityByCoordsOptions());
  },
  component: RootComponent,
});

function RootComponent() {
  useGetLocalityByCoords();

  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}
