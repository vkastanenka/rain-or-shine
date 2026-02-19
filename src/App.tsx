import { cn } from "@/lib/utils";
import { Text } from "@/components";

function App() {
  return (
    <Section>
      <Text type="headline1">Headline1</Text>
    </Section>
  );
}

export default App;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={cn("w-full py-10", className)}>
      <div className="content-container">{children}</div>
    </section>
  );
};
