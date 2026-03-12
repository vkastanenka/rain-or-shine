import { type BigDataCloudLocation } from "@/services";

export const formatWeatherUrl = (
  location: BigDataCloudLocation,
  period: string = "current",
): string => {
  const country = location.countryCode.toLowerCase();
  const province = location.principalSubdivision
    .toLowerCase()
    .replace(/\s+/g, "-");
  const city = location.city.toLowerCase().replace(/\s+/g, "-");

  return `/weather/${country}/${province}/${city}/${period}`;
};
