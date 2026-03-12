import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { useReverseGeocoding } from "./hooks";
import "./index.css";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { location: undefined, isLoading: true },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  const { data: location, isLoading } = useReverseGeocoding();

  return (
    <RouterProvider
      router={router}
      context={{
        location,
        isLoading,
      }}
    />
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
