import { createFileRoute } from "@tanstack/react-router";
import { Flex, Grid, Text, Section, FlexCol } from "@/components";
import {
  LocationSearch,
  LocationCardLink,
  FORECAST_PERIOD_MAP,
} from "@/features";
import type { ValidWeatherPathLocation } from "@/services";
import { cn } from "@/utils";
import {
  HOME_LABELS as LABELS,
  homeRouteLoader as routeLoader,
  useHomeCurrentForecastQueries as useCurrentForecastQueries,
  formatAllLocations,
  formatAllForecasts,
} from "@/routing";

export const Route = createFileRoute("/")({
  loader: routeLoader,
  component: RouteComponent,
});

function RouteComponent() {
  const { currentLocality, recentLocations } = Route.useLoaderData();

  const allLocations = formatAllLocations(currentLocality, recentLocations);
  const allForecasts = useCurrentForecastQueries(allLocations);

  const { localityForecast, recentLocationsForecasts } = formatAllForecasts(
    currentLocality,
    allForecasts,
  );

  const currentLocalityLocationCard = currentLocality
    ? { location: currentLocality, forecast: localityForecast }
    : undefined;

  const recentLocationsCards = recentLocationsForecasts.map(
    (forecast, index) => ({
      location: allLocations[index] as ValidWeatherPathLocation,
      forecast,
    }),
  );

  return (
    <>
      <Section>
        <FlexCol gap={4} className="w-full">
          <div>
            <Text type={{ base: "headline6", sm: "headline5" }}>
              {LABELS.hero.superTitle()}
            </Text>
            <Text type={{ base: "headline3", sm: "headline2" }}>
              <span className="block">{LABELS.hero.primaryTitle}</span>
              <span>{LABELS.hero.secondaryTitle}</span>
            </Text>
          </div>
          <LocationSearch className={cn("xl:max-w-130")} />
        </FlexCol>
      </Section>
      {(currentLocalityLocationCard || recentLocationsCards.length > 0) && (
        <Section>
          <Grid gap={4} cols={{ base: 1, lg: 3 }} className="w-full">
            {currentLocalityLocationCard &&
              currentLocalityLocationCard.forecast && (
                <Grid.Item span={1}>
                  <FlexCol gap={1} stretchItems className="w-full">
                    <Text type="large" className="font-medium">
                      {LABELS.currentLocation.title}
                    </Text>
                    <LocationCardLink
                      place={currentLocalityLocationCard.location}
                      forecast={currentLocalityLocationCard.forecast}
                      period={FORECAST_PERIOD_MAP.current}
                      className="w-full"
                    />
                  </FlexCol>
                </Grid.Item>
              )}
            {recentLocationsCards.length > 0 && (
              <Grid.Item
                span={{
                  base: 1,
                  lg: recentLocationsCards.length === 1 ? 1 : 2,
                }}
              >
                <FlexCol gap={1}>
                  <Text type="large" className="font-medium">
                    {LABELS.recentLocations.title}
                  </Text>
                  <Flex
                    gap={4}
                    direction={{ base: "col", md: "row" }}
                    stretchItems
                    className="w-full"
                  >
                    {recentLocationsCards.map((card, i) => (
                      <LocationCardLink
                        key={`${card.location.name}-${i}`}
                        place={card.location}
                        forecast={card.forecast}
                        period={FORECAST_PERIOD_MAP.current}
                        className="w-full"
                      />
                    ))}
                  </Flex>
                </FlexCol>
              </Grid.Item>
            )}
          </Grid>
        </Section>
      )}
    </>
  );
}
