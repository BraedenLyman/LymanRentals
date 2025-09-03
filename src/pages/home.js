import { Heading, Text, Box, Flex, Image, Button, Card, SimpleGrid } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {

  return (
    <Box>
      <Box
        position="relative"
        minH="70vh"
        bgImage="url('/images/welcome.png')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        borderRadius="2xl"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0,0,0,0.5)" 
        />
        <Box position="relative" zIndex={1} px={4}>
          <Heading as="h1" size="4xl" color="brand.100" textAlign="center">
              Welcome to Lyman Rentals!
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" mt={4} >
              Where your dream events begin with our exquisite rentals.
          </Text>
        </Box>
      </Box>

      {/* Small Blurb */}
      <Box
        maxW="container.lg"
        mx="auto"
        py={{ base: 16, md: 24 }}
        textAlign="center"
      >
        <Text fontSize={{ base: "2xl", md: "4xl" }} lineHeight="tall">
            Discover the perfect pieces to make your special day <Text as="span" fontStyle="italic">unforgettable.</Text>
        </Text>
        <Box borderBottom="2px solid" borderColor="gray.300" w="200px" mx="auto" my={8} />
      </Box>

      {/* What We Offer Section */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="white">
        <Heading as="h2" size="2xl" textAlign="center" mb={12}>
            What We Offer
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="container.xl" mx="auto">

          {/* Whiskey Barrel Tables */}
          <Card borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'lg', transform: 'translateY(-5px)' }} transition="all 0.3s ease" as={Link} to="/whiskey-barrel-tables">
              <Image src="/images/1.png" alt="Whiskey Barrel Tables" h="200px" w="full" objectFit="cover" />
              <Box p={6}>
                  <Heading as="h3" size="lg" textAlign="center">Whiskey Barrel Tables</Heading>
                  <Flex justify="center" mt={4}>
                      <Button as={Link} to="/whiskey-barrel-tables" colorScheme="cyan" variant="outline">Details</Button>
                  </Flex>
              </Box>
          </Card>

          {/* Benches */}
          <Card borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'lg', transform: 'translateY(-5px)' }} transition="all 0.3s ease" as={Link} to="/benches">
              <Image src="/images/2.png" alt="Benches" h="200px" w="full" objectFit="cover" />
              <Box p={6}>
                  <Heading as="h3" size="lg" textAlign="center">Benches</Heading>
                   <Flex justify="center" mt={4}>
                      <Button as={Link} to="/benches" colorScheme="cyan" variant="outline">Details</Button>
                  </Flex>
              </Box>
          </Card>

          {/* Arches */}
          <Card borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'lg', transform: 'translateY(-5px)' }} transition="all 0.3s ease" as={Link} to="/arches">
              <Image src="/images/4.png" alt="Arches" h="200px" w="full" objectFit="cover" />
              <Box p={6}>
                  <Heading as="h3" size="lg" textAlign="center" fontFamily="Playfair Display">Arches</Heading>
                   <Flex justify="center" mt={4}>
                      <Button as={Link} to="/arches" colorScheme="cyan" variant="outline">Details</Button>
                  </Flex>
              </Box>
          </Card>
        </SimpleGrid>
        <Flex justify="center" mt={12}>
          <Button as={Link} to="/what-we-offer" size="lg" colorScheme="cyan" >
            And lots more!
          </Button>
        </Flex>
      </Box>

      {/* Availability Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        py={{ base: 16, md: 24 }}
      >
        <Heading as="h2" size="2xl" mb={8} fontFamily="Playfair Display">
            Check Our Availability
        </Heading>
        <Text fontSize="xl" maxW="container.md" textAlign="center">
          For availability and any other inquiries, please contact us. We'd love to hear from you!
        </Text>
        <Button
            as="a"
            href="https://www.facebook.com/LymanRentals"
            target="_blank"
            rel="noopener noreferrer"
            mt={8}
            size="lg"
            colorScheme="facebook"
            leftIcon={<MdFacebook/>}
        >
            Message us on Facebook
        </Button>
      </Flex>
    </Box>
  );
}

export default Home;