import { Link } from "@tanstack/react-router";
import { Button, Drawer, FlexCol, Text } from "@/components";
import { ACCESSIBILITY_LABELS } from "@/constants";
import { useRootLayoutState, useRootLayoutActions } from "@/routing";
import { LocationSearch } from "../LocationSearch";
import { LABELS } from "../constants";
import { STORAGE_KEY_MAP, useStorage } from "@/services";
import {
  FORECAST_PERIOD_MAP,
  formatWeatherUrlPath,
} from "@/features/weather-forecast";

export const LocationSearchDrawer = () => {
  const { searchDrawerIsOpen } = useRootLayoutState();
  const { closeSearchDrawer } = useRootLayoutActions();
  const { data: recentLocations, remove: removeRecentLocations } = useStorage(
    STORAGE_KEY_MAP.recentLocations,
  );
  const hasRecentLocations = recentLocations && recentLocations?.length > 0;

  const handleRemoveRecentLocations = async () => {
    await removeRecentLocations();
  };

  return (
    <Drawer
      height="layout"
      width="full"
      isOpen={searchDrawerIsOpen}
      onClose={closeSearchDrawer}
      drawerAriaLabel={ACCESSIBILITY_LABELS.components.searchDrawer}
      closeBtnAriaLabel={ACCESSIBILITY_LABELS.actions.closeSearchDrawer}
    >
      <FlexCol gap={8} className="w-full">
        <FlexCol gap={2} className="w-full">
          <Text type={{ base: "headline5", sm: "headline4", lg: "headline3" }}>
            {LABELS.searchLocation}
          </Text>
          <LocationSearch showRecentLocations={false} />
        </FlexCol>
        {recentLocations && hasRecentLocations && (
          <FlexCol gap={2} className="w-full">
            <Text
              type={{ base: "headline6", sm: "headline5", lg: "headline4" }}
            >
              {LABELS.recentLocations}
            </Text>
            <Button color="neutral" onClick={handleRemoveRecentLocations}>
              {LABELS.clearRecentLocations}
            </Button>
            <FlexCol className="w-full">
              {recentLocations.map((location) => (
                <Link
                  to="/"
                  // to={formatWeatherUrlPath({
                  //   countryCode: location.country_code,
                  //   region: location.admin1,
                  //   city: location.name,
                  //   period: FORECAST_PERIOD_MAP.current,
                  // })}
                  className="text-input-suggestions-item w-full"
                >
                  <Text
                    type={{ base: "large", sm: "headline6" }}
                    className="font-medium"
                  >
                    {location.name}
                  </Text>
                  <Text
                    type={{ base: "body1", sm: "large" }}
                    className="opacity-70"
                  >
                    {location.admin1}, {location.country}
                  </Text>
                </Link>
              ))}
            </FlexCol>
          </FlexCol>
        )}
      </FlexCol>
    </Drawer>
  );
};
