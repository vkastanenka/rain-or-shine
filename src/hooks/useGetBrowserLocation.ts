import { useState, useEffect } from "react";

export const useGetBrowserLocation = () => {
  const [location, setLocation] = useState<GeolocationCoordinates>();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    const successCallback = (pos: GeolocationPosition) => {
      setLocation(pos.coords);
    };

    const errorCallback = (err: GeolocationPositionError) => {
      console.error("Geolocation Error:", err.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      timeout: 10000,
    });
  }, []);

  return location;
};
