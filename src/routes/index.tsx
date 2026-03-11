import { createFileRoute } from "@tanstack/react-router";
import { Text, Section, FlexCol, TextInput } from "@/components";

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
      <Section>
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
            size="xl"
            placeholder="Enter location"
            className="w-full max-w-130"
            suggestions={suggestions}
          />
        </FlexCol>
      </Section>
    </div>
  );
}
