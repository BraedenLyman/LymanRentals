import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="30vh"
      as="footer"
      py={10}
    >
      <Heading size="xl" marginBottom="60px" textAlign="center">
        <Text>Lyman Rentals</Text>
        <div style={{ border: "1px solid black", width: "200px", marginLeft: "auto", marginRight: "auto", marginTop: "10px" }} />
      </Heading>

      {/* Footer Links */}
      <Flex
        direction="row"
        gap="50px"
      >
      
        <Link to="/about">
          <Text fontSize="20px">
            About
          </Text>
        </Link>

        <Link to="/contact">
          <Text fontSize="20px">
            Contact Us
          </Text>
        </Link>
      </Flex>

      <div style={{ border: "1px solid black", width: "400px", marginLeft: "auto", marginRight: "auto", marginBottom: "20px", marginTop: "20px" }} />

      {/* Legal Links*/}
      <Flex
        direction="row"
        gap="50px"
      >
        <Link to="/terms-of-service">
          <Text fontSize="20px">
            Terms Of Service
          </Text>
        </Link>
        <Link to="/privacy-policy">
          <Text fontSize="20px">
            Privacy Policy
          </Text>
        </Link>
      </Flex>

      <Text fontSize="20px" marginTop="50px"> Copyright LymanRentals. All rights reserved.</Text>
    </Flex>
  );
}

export default Footer;