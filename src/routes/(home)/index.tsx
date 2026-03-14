import { createFileRoute } from "@tanstack/react-router";
import { Text, Section, FlexCol, TextInput, Grid } from "@/components";
import { LocalityCard, getLocalityCardProps } from "@/features";
import {
  getForecastByCoordsOptions,
  getLocalityByCoordsOptions,
} from "@/services";
import { LABELS } from "./-constants";
import { getForecastByCoordsParams } from "./-utils";

export const Route = createFileRoute("/(home)/")({
  loader: async ({ context }) => {
    const currentLocality = await context.queryClient
      .fetchQuery(getLocalityByCoordsOptions())
      .catch(() => null);

    let currentLocalityForecast;
    let currentLocalityCardParams;

    if (currentLocality) {
      const currentLocalityForecastParams =
        getForecastByCoordsParams(currentLocality);

      currentLocalityForecast = await context.queryClient.fetchQuery(
        getForecastByCoordsOptions(currentLocalityForecastParams),
      );

      if (currentLocalityForecast) {
        currentLocalityCardParams = getLocalityCardProps(
          currentLocality,
          currentLocalityForecast,
        );
      }
    }

    return {
      currentLocality,
      currentLocalityForecast,
      currentLocalityCardParams,
    };
  },
  component: RouteComponent,
});

const suggestions = {
  id: "locations",
  collection: [
    "Toronto, Ontario, Canada",
    "Vancouver, British Columbia, Canada",
    "North Bay, Ontario, Canada",
  ],
};

function RouteComponent() {
  const { currentLocalityCardParams } = Route.useLoaderData();

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
            <TextInput
              type="search"
              size={{ base: "lg", md: "xl" }}
              placeholder="Enter location"
              className="w-full max-w-130"
              suggestions={suggestions}
            />
          </FlexCol>
          {currentLocalityCardParams && (
            <Grid fit gap={4} cols={{ base: 1, md: 3 }}>
              <Grid.Item span={1}>
                <FlexCol fit gap={1} stretchItems>
                  <Text type="large" className="font-medium">
                    {LABELS.currentLocation.title}
                  </Text>
                  <LocalityCard
                    city={currentLocalityCardParams.city}
                    region={currentLocalityCardParams.region}
                    WmoIcon={currentLocalityCardParams.WmoIcon}
                    temperature={currentLocalityCardParams.temperature}
                  />
                </FlexCol>
              </Grid.Item>
            </Grid>
          )}
        </FlexCol>
      </Section>
    </div>
  );
}

// TODO: precious searches
{
  /* <Grid.Item span={{ base: 1, md: 2 }}>
              <FlexCol fit gap={1}>
                <Text type="large" className="font-medium">
                  Your recent locations
                </Text>
                <Flex
                  fit
                  gap={4}
                  direction={{ base: "col", md: "row" }}
                  stretchItems
                >
                  <LocationCard />
                  <LocationCard />
                </Flex>
              </FlexCol>
            </Grid.Item> */
}
