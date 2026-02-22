import { cn } from "@/utils";
import { Flex, Section, Text } from "@/components";
import { Barometer } from "./assets/icons/meteocons/fill";

function App() {
  return (
    <Section>
      <Barometer className="w-4 md:w-96" />
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
