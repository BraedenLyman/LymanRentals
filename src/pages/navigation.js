import { Heading, HStack, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navigation() {
    const bg = useColorModeValue('rgba(247, 250, 252, 0.8)', 'rgba(26, 32, 44, 0.8)');
    const color = useColorModeValue('brand.800', 'white');

    return (
    <>
        <Heading
            as="h1"
            size="xl"
            py='6'
            textAlign="center"
            position="sticky"
            top="0"
            zIndex="sticky"
            backdropFilter="blur(10px)"
            bg={bg}
            fontFamily="Playfair Display"
        >
            Lyman Rentals
        </Heading>
        <HStack
            justifyContent="center"
            spacing={{ base: 4, md: 8 }}
            borderBottom="1px solid"
            borderColor="gray.200"
            position="sticky"
            top={{ base: "80px", md: "90px" }}
            zIndex="sticky"
            backdropFilter="blur(10px)"
            bg={bg}
            py={4}
        >
            <Button as={Link} to="/" variant="ghost" color={color} _hover={{ bg: 'gray.200' }}>
                Home
            </Button>
            <Button as={Link} to="/what-we-offer" variant="ghost" color={color} _hover={{ bg: 'gray.200' }}>
                What We Offer
            </Button>
            <Button as={Link} to="/contact" variant="ghost" color={color} _hover={{ bg: 'gray.200' }}>
                Contact Us
            </Button>
            <Button as={Link} to="/about" variant="ghost" color={color} _hover={{ bg: 'gray.200' }}>
                About Us
            </Button>
        </HStack>
    </>
  );
}

export default Navigation;