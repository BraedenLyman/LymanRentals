import { Heading, Text, Box, Flex, Image, Button, Card, } from "@chakra-ui/react";

function About() {

  return (
    <div>        
        <Heading size="xl" textAlign="center" marginTop="80px" marginBottom="80px">
           About Us
        </Heading>

        <Flex
            direction="column"
            align="center"
            justify="center"
            gap="80px"
            marginBottom="200px"
        >
            <Text fontSize="20px" textAlign="center">
                Welcome to LymanRentals!
            </Text>
            <Text fontSize="20px" textAlign="center" width="900px">
                We are a family-owned business born out of a love for weddings and a belief in the beauty of repurposing. After a recent family member's wedding, we found ourselves with an array of beautiful items and a passion for sharing them with others.
            </Text>
            <Text fontSize="20px" textAlign="center" width="900px">
                At LymanRentals, we believe every event should be unique and memorable. That's why we offer a curated selection of elegant and charming rental items, from whiskey barrel tables and wedding arches to comfortable benches and more. Each piece has its own story and adds a touch of personality to your special day.
            </Text>
            <Text fontSize="20px" textAlign="center" width="900px">
                Our mission is to help you create unforgettable memories by providing high-quality, stylish rentals that fit seamlessly into your event's theme. As a family business, we take pride in offering friendly and personalized service, ensuring that every detail is just right.
            </Text>
            <Text fontSize="20px" textAlign="center" width="900px">
                Thank you for choosing LymanRentals. We look forward to being a part of your celebration and helping you make lasting memories!
            </Text>
        </Flex>
    </div>
  );
}

export default About;