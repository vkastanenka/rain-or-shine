import { createFileRoute } from "@tanstack/react-router";
import { Text, Section, FlexCol, Grid, Flex, Button } from "@/components";
import { formatWeatherUrlPath, LocalityCard } from "@/features";
import { LABELS } from "./-constants";
import { routeLoader } from "./-utils";
import { LocationSearch } from "@/features";

export const Route = createFileRoute("/(home)/")({
  loader: routeLoader,
  component: RouteComponent,
});

function RouteComponent() {
  const {
    currentLocality,
    currentLocalityCardParams,
    // recentLocations,
    recentLocationsCardParams,
  } = Route.useLoaderData();

  return (
    <div>
      <Section py={{ base: 10, md: 16 }}>
        <FlexCol gap={{ base: 4, md: 6 }}>
          <FlexCol gap={4}>
            <div>
              <Text type={{ base: "headline6", sm: "headline5" }}>
                {LABELS.hero.superTitle()}
              </Text>
              <Text type={{ base: "headline3", sm: "headline2" }}>
                <span className="block">{LABELS.hero.primaryTitle}</span>
                <span>{LABELS.hero.secondaryTitle}</span>
              </Text>
            </div>
            <LocationSearch className="max-w-130" />
          </FlexCol>
          {(currentLocalityCardParams || recentLocationsCardParams) && (
            <Grid fit gap={4} cols={{ base: 1, lg: 3 }}>
              {currentLocalityCardParams && (
                <Grid.Item span={1}>
                  <FlexCol fit gap={1} stretchItems>
                    <Text type="large" className="font-medium">
                      {LABELS.currentLocation.title}
                    </Text>
                    <Button
                      unstyled
                      className="hover-3d w-full"
                      to={formatWeatherUrlPath(
                        currentLocality?.countryName || "",
                        currentLocality?.locality || "",
                        currentLocality?.city || "",
                        "current",
                      )}
                    >
                      <LocalityCard
                        city={currentLocalityCardParams.city}
                        region={currentLocalityCardParams.region}
                        WmoIcon={currentLocalityCardParams.WmoIcon}
                        temperature={currentLocalityCardParams.temperature}
                      />
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </Button>
                  </FlexCol>
                </Grid.Item>
              )}
              {/* {recentLocationsCardParams.length > 0 && (
                <Grid.Item
                  span={{
                    base: 1,
                    lg: recentLocationsCardParams.length === 1 ? 1 : 2,
                  }}
                >
                  <FlexCol fit gap={1}>
                    <Text type="large" className="font-medium">
                      {LABELS.recentLocations.title}
                    </Text>
                    <Flex
                      fit
                      gap={4}
                      direction={{ base: "col", md: "row" }}
                      stretchItems
                    >
                      {recentLocationsCardParams.map((params, i) => (
                        <Button
                          key={`${params.city}-${i}`}
                          unstyled
                          className="hover-3d"
                          to={formatWeatherUrlPath(
                            recentLocations[i].country || "",
                            recentLocations[i].admin1 || "",
                            recentLocations[i].name || "",
                            "current",
                          )}
                        >
                          <LocalityCard
                            city={params.city}
                            region={params.region}
                            WmoIcon={params.WmoIcon}
                            temperature={params.temperature}
                          />
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </Button>
                      ))}
                    </Flex>
                  </FlexCol>
                </Grid.Item>
              )} */}
            </Grid>
          )}
        </FlexCol>
      </Section>
    </div>
  );
}
