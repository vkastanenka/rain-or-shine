import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { local, session } from "./service";
import type { StorageKey, Storage, StorageType } from "./types";
import type { ValidWeatherPathLocation } from "../open-meteo";
import { moveLocationToFront } from "./utils";

export const useStorage = <K extends StorageKey>(
  key: K,
  defaultValue?: Storage[K],
  type: StorageType = "local",
) => {
  const queryClient = useQueryClient();
  const manager = type === "local" ? local : session;
  const queryKey = ["storage", type, key];

  const query = useQuery({
    queryKey,
    queryFn: () => manager.get(key) ?? defaultValue,
  });

  const mutation = useMutation({
    mutationFn: async (newValue: Storage[K]) => manager.set(key, newValue), // Want to set / remove undefined
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return [query.data ?? defaultValue, mutation.mutate] as const;
};

export const useSaveRecentLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (location: ValidWeatherPathLocation) => {
      local.update("recentLocations", (prev) =>
        moveLocationToFront(prev, location, 2),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["storage", "local", "recentLocations"],
      });
    },
  });
};
