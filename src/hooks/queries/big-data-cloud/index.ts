import { useQuery } from "@tanstack/react-query";
import { bigDataCloudService } from "@/services";

export const getBrowserLocation = (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      (err) => reject(err),
      { timeout: 10000 },
    );
  });
};

export function useReverseGeocoding() {
  return useQuery({
    queryKey: ["location", "reverse-geocode"],
    queryFn: async () => {
      // 1. Start the browser location request (but don't await it yet)
      const browserPromise = getBrowserLocation().catch(() => null);

      // 2. Start the IP-based geocode request immediately
      // We don't await the browser here so the network request fires NOW
      const ipBasedData = await bigDataCloudService.reverseGeocode();

      // 3. Now, we check if the browser coords have arrived
      // We can use a timeout so we don't wait forever for the user to click "Allow"
      const coords = await browserPromise;

      if (coords) {
        // 4. "Upgrade" the data with precise coordinates if we got them
        const preciseData = await bigDataCloudService.reverseGeocode({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        return {
          ...preciseData,
          formattedLocation: `${preciseData.city || preciseData.locality}, ${preciseData.principalSubdivision}`,
          isPrecise: true,
        };
      }

      // Fallback to the IP data we already fetched
      return {
        ...ipBasedData,
        formattedLocation: `${ipBasedData.city || ipBasedData.locality}, ${ipBasedData.principalSubdivision}`,
        isPrecise: false,
      };
    },
    staleTime: Infinity,
    retry: false,
  });
}
