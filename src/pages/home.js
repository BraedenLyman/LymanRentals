import { Heading, Box, Flex, useColorMode } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Box minH="80vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="80vh"
      >
        <Heading size="3xl">
            Welcome to Lyman Rentals!
        </Heading>
      </Flex>
    </Box>
  );
}

export default Home;