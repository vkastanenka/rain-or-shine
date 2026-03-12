import { useQuery } from "@tanstack/react-query";
import { bigDataCloudService } from "@/services";
import { type GeolocationCoordinates } from "@/types";

export function useReverseGeocode(coords?: GeolocationCoordinates) {
  return useQuery({
    queryKey: [
      "location",
      "reverse-geocode",
      coords?.latitude,
      coords?.longitude,
    ],
    queryFn: async () => {
      const params = coords
        ? { longitude: coords.longitude, latitude: coords.latitude }
        : undefined;

      const res = await bigDataCloudService.reverseGeocode(params);

      return res;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 15,
  });
}
