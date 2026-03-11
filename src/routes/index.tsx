import { createFileRoute } from "@tanstack/react-router";
import { Text, Section, Container, Flex, FlexCol } from "@/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Section>
        <FlexCol>
          <div className="max-w-130">
            <Text type={{ base: "headline6", sm: "headline5" }}>
              It's Wednesday, March 11th
            </Text>
            <Text type={{ base: "headline3", sm: "headline2" }}>
              <span className="block">Rain or Shine:</span>
              <span>Your Day Defined</span>
            </Text>
          </div>
        </FlexCol>
      </Section>
    </div>
  );
}
