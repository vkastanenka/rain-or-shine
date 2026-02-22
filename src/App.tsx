import { cn } from "@/utils";
import { Flex, Section, Text } from "@/components";

function App() {
  return (
    <Section>
      <Flex>
        <Text>Flex Test Item 1</Text>
        <Text>Flex Test Item 2</Text>
        <Text>Flex Test Item 3</Text>
      </Flex>
    </Section>
  );
}

export default App;

const WeatherCard = () => {
  <div className="bg-mauve-700">
    <Flex direction={{ base: "col" }}>
      <Text>3pm</Text>
      <Text type="headline4">3°</Text>
      <Text type="caption">Feels -1</Text>
      <Flex>
        <Text>30%</Text>
      </Flex>
    </Flex>
  </div>;
};
