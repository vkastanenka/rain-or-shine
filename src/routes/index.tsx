import { createFileRoute } from "@tanstack/react-router";
import { Text, Section, FlexCol, TextInput, Grid, Flex } from "@/components";
import { LocationCard } from "@/features";

export const Route = createFileRoute("/")({
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
  return (
    <div>
      <Section py={{ base: 10, md: 16 }}>
        <FlexCol gap={4}>
          <div>
            <Text type={{ base: "headline6", sm: "headline5" }}>
              It's Wednesday, March 11th
            </Text>
            <Text type={{ base: "headline3", sm: "headline2" }}>
              <span className="block">Rain or Shine:</span>
              <span>Your day defined</span>
            </Text>
          </div>
          <TextInput
            type="search"
            size={{ base: "lg", md: "xl" }}
            placeholder="Enter location"
            className="w-full max-w-130"
            suggestions={suggestions}
          />
          <Grid fit gap={4} cols={{ base: 1, md: 3 }}>
            <Grid.Item span={1}>
              <FlexCol fit gap={1} stretchItems>
                <Text className="font-medium">Your current location</Text>
                <LocationCard />
              </FlexCol>
            </Grid.Item>
            <Grid.Item span={{ base: 1, md: 2 }}>
              <FlexCol fit gap={1}>
                <Text className="font-medium">Your recent locations</Text>
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
            </Grid.Item>
          </Grid>
        </FlexCol>
      </Section>
    </div>
  );
}
