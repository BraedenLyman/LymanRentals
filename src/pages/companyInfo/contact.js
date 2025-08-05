import { Heading, Text, Box, Flex, Image, Button, Card, } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Contact() {

  return (
    <div>
        <Heading size="xl" textAlign="center" marginTop="80px" marginBottom="80px">
           Contact Us
        </Heading>

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="80px"
        marginBottom="200px"
      >
        <Text fontSize="20px" textAlign="center" width="850px">
            We'd love to hear from you! Whether you have questions, need assistance, or want to book our rental items for your special event, please don't hesitate to reach out.
        </Text>
        
        <Flex
            direction="column"
            align="center"
            justify="center"
        >
            <Text fontSize="20px" textAlign="center" width="850px">The best way to contact us is through Facebook messenger.</Text>
            <Text fontSize="20px" textAlign="center" width="850px">Click the link below to chat with us there. See you soon!</Text>
        </Flex>

        <Link to="https://www.facebook.com/LymanRentals" target="_blank">
          <Button>Click to Open Facebook</Button>
        </Link>
      </Flex>
    </div>
  );
}

export default Contact;