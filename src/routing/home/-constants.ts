import { format } from "date-fns";

export const LABELS = {
  hero: {
    superTitle: () => {
      const today = new Date();
      const dateString = format(today, "EEEE, MMMM do");
      return `It's ${dateString}`;
    },
    primaryTitle: "Rain or Shine:",
    secondaryTitle: "Your day defined",
  },
  locationSearch: {
    placeholder: "Enter location",
  },
  currentLocation: {
    title: "Your current location",
  },
  recentLocations: {
    title: "Your recent locations",
  },
} as const;
