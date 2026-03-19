import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { local, session } from "./service";
import type { StorageKey, Storage, StorageType } from "./types";
import { getStorageKey } from "./utils";
import { useCallback, useEffect } from "react";

export const useStorage = <K extends StorageKey>(
  key: K,
  type: StorageType = "local",
) => {
  const queryClient = useQueryClient();
  const manager = type === "local" ? local : session;
  const queryKey = ["storage", type, key];

  const query = useQuery({
    queryKey,
    queryFn: () => manager.get(key),
  });

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === getStorageKey(key)) {
        invalidate();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, invalidate]);

  const setMutation = useMutation({
    mutationFn: async (newValue: Storage[K]) => manager.set(key, newValue),
    onSuccess: invalidate,
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      item,
      filterKey,
    }: {
      item: any;
      filterKey?: string;
    }) => manager.update(key, item, filterKey),
    onSuccess: invalidate,
  });

  const removeMutation = useMutation({
    mutationFn: async () => manager.remove(key),
    onSuccess: invalidate,
  });

  return {
    data: query.data as Storage[K] | undefined,
    set: setMutation.mutate,
    update: updateMutation.mutate,
    remove: removeMutation.mutate,
    isLoading: query.isLoading,
  };
};
