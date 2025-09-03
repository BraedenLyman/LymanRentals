import { Heading, Flex, Image, Button, Card, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const rentalItems = [
    { name: "Whiskey Barrel Tables", link: "/whiskey-barrel-tables", image: "/images/1.png" },
    { name: "Benches", link: "/benches", image: "/images/2.png" },
    { name: "Arches", link: "/arches", image: "/images/4.png" },
    { name: "Whiskey Barrel Bar", link: "/whiskey-barrel-bar", image: "/images/6.png" },
    { name: "Chest Coffee Table", link: "/chest-coffee-table", image: "/images/7.png" },
    { name: "Desert Ladder", link: "/desert-ladder", image: "/images/8.png" },
    { name: "Memory Ladder", link: "/memory-ladder", image: "/images/9.png" },
    { name: "Order Of Events", link: "/order-of-events", image: "/images/10.png" },
    { name: "Candle Lanterns", link: "/candle-lanterns", image: "/images/11.png" },
    { name: "Decorations", link: "/decorations", image: "/images/12.png" },
    { name: "Edison Lights", link: "/edison-lights", image: "/images/13.png" },
    { name: "Photo Backdrop", link: "/photo-backdrop", image: "/images/13.png" },
    { name: "Water Jugs", link: "/water-jugs", image: "/images/14.png" },
    { name: "Stock Tanks", link: "/stock-tanks", image: "/images/15.png" },
]

function Offer() {

  return (
    <Box maxW="container.xl" mx="auto" py={{ base: 12, md: 20 }}>
      <Heading as="h1" size="3xl" textAlign="center" mb={16} >
          What We Offer
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          {rentalItems.map((item) => (
             <Card key={item.name} borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'xl', transform: 'translateY(-5px)' }} transition="all 0.3s ease-in-out" as={Link} to={item.link}>
                <Image src={item.image} alt={item.name} h="250px" w="full" objectFit="" />
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