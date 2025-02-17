import Container from "./ui/Container";
import ChakraCard from "./ui/ChakraCard";
import Heading from "./ui/Heading";

interface Chakra {
  name: string;
  color: string;
  feature: string;
}

interface ChakraAlignmentProps {
  title: string;
  chakras: Chakra[];
}

export default function ChakraAlignment({
  title = "Chakra Alignment",
  chakras,
}: ChakraAlignmentProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <Heading title={title} />
        </div>

        {/* Chakras Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chakras.map((chakra) => (
            <ChakraCard key={chakra.name} {...chakra} />
          ))}
        </div>
      </Container>
    </section>
  );
}
