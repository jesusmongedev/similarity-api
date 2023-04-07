import Heading from "./components/ui/LargeHeading";
import Paragraph from "./components/ui/Paragraph";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <Heading size="lg">Similaroty Api</Heading>
      <Paragraph className="my-4" size="default">
        Hello World!
      </Paragraph>
    </main>
  );
}
