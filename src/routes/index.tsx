import { createFileRoute } from "@tanstack/react-router";
import { FlexCol, Text, Button } from "@/components";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <FlexCol gap={2} className="p-2">
      Hello "/"!
      <Button>
        <Text type="body2">Button Test</Text>
      </Button>
    </FlexCol>
  );
}
