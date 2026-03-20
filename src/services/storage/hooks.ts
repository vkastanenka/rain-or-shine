import { useCallback, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { local, session } from "./service";
import type { StorageKey, Storage, StorageType } from "./types";
import { getStorageKey } from "./utils";

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
    onSuccess: (newValue) => {
      queryClient.setQueryData(queryKey, newValue);
    },
  });

  const removeMutation = useMutation({
    mutationFn: async () => manager.remove(key),
    onSuccess: () => {
      queryClient.setQueryData(queryKey, null);
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return {
    data: query.data as Storage[K] | undefined,
    set: setMutation.mutate,
    remove: removeMutation.mutateAsync,
    isLoading: query.isLoading,
  };
};
