import { useQuery } from "@tanstack/react-query";
import { bigDataCloudService } from "@/services";

export function useReverseGeocoding(coords?: GeolocationCoordinates) {
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
    staleTime: Infinity,
    retry: false,
  });
}
