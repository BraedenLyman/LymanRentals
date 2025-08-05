import { Heading, Text, Flex, Image, Button, Card, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const rentalItems = [
    { name: "Whiskey Barrel Tables", link: "/whiskey-barrel-tables", image: "/images/barrel.png" },
    { name: "Benches", link: "/benches", image: "/images/bench.png" },
    { name: "Arches", link: "/arches", image: "/images/arch.png" },
    { name: "Whiskey Barrel Bar", link: "/whiskey-barrel-bar", image: "/path-to-image.jpg" },
    { name: "Chest Coffee Table", link: "/chest-coffee-table", image: "/path-to-image.jpg" },
    { name: "Desert Ladder", link: "/desert-ladder", image: "/path-to-image.jpg" },
    { name: "Memory Ladder", link: "/memory-ladder", image: "/path-to-image.jpg" },
    { name: "Order Of Events", link: "/order-of-events", image: "/path-to-image.jpg" },
    { name: "Candle Lanterns", link: "/candle-lanterns", image: "/path-to-image.jpg" },
    { name: "Decorations", link: "/decorations", image: "/path-to-image.jpg" },
    { name: "Edison Lights", link: "/edison-lights", image: "/path-to-image.jpg" },
    { name: "Photo Backdrop", link: "/photo-backdrop", image: "/path-to-image.jpg" },
    { name: "Water Jugs", link: "/water-jugs", image: "/path-to-image.jpg" },
    { name: "Stock Tanks", link: "/stock-tanks", image: "/path-to-image.jpg" },
]

function Offer() {

  return (
    <Box maxW="container.xl" mx="auto" py={{ base: 12, md: 20 }}>
      <Heading as="h1" size="3xl" textAlign="center" mb={16} fontFamily="Playfair Display">
          What We Offer
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {rentalItems.map((item) => (
             <Card key={item.name} borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'xl', transform: 'translateY(-5px)' }} transition="all 0.3s ease-in-out">
                <Image src={item.image} alt={item.name} h="250px" w="full" objectFit="cover" />
                <Box p={6} bg="white">
                    <Heading as="h3" size="lg" textAlign="center" fontFamily="Playfair Display" textColor="#000" mb={4}>{item.name}</Heading>
                    <Flex justify="center">
                        <Button as={Link} to={item.link} colorScheme="blue" variant="solid">Details</Button>
                    </Flex>
                </Box>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Offer;