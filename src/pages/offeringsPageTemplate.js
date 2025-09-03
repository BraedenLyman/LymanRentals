import { Box, Flex, Heading, Text, Image, VStack, HStack, Icon, Divider} from "@chakra-ui/react";
import { FaTag, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function OfferingsPageTemplate({ item }) {
    const { name, images, rentPrice, stock, rentDuration, pickupLocation, deliveryLocation, qualities } = item;

    return (
        <Box p={8}>
            <VStack spacing={8} align="stretch">
                <Heading as="h1" size="2xl" textAlign="center">
                    {name}
                </Heading>
                <Flex justifyContent="center" mb="10" gap={8}>
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`${name} image ${index + 1}`}
                            boxSize="300px"
                            objectFit="cover"
                            borderRadius="md"
                        />
                    ))}
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-evenly" gap={8}>

                    <VStack align="start" justifyContent="center" spacing={10}>
                        <HStack>
                            <HStack>
                                <Icon as={FaTag} w={6} h={6} color="green.500" />
                                <Text fontSize="xl" fontWeight="bold">
                                    Rent Price:
                                </Text>
                            </HStack>
                            <Text fontSize="xl">{rentPrice}</Text>
                        </HStack>
                        <HStack>
                            <HStack>
                                <Icon as={FaTag} w={6} h={6} color="green.500" />
                                <Text fontSize="xl" fontWeight="bold">
                                    Stock: 
                                </Text>
                            </HStack>
                            <Text fontSize="xl">{stock}</Text>
                        </HStack>
                        <HStack>
                            <HStack>
                                <Icon as={FaCalendarAlt} w={6} h={6} color="green.500" />
                                <Text fontSize="xl" fontWeight="bold">
                                    Rent Duration:
                                </Text>
                            </HStack>
                            <Text fontSize="xl">{rentDuration}</Text>
                        </HStack>
                    </VStack>

                    <VStack align="start" justifyContent="center" spacing={10}>
                        <HStack>
                            <HStack>
                                <Icon as={FaMapMarkerAlt} w={6} h={6} color="orange.500" />
                                <Text fontSize="xl" fontWeight="bold">
                                    Pickup Location:
                                </Text>
                            </HStack>
                            <Text fontSize="xl">{pickupLocation}</Text>
                        </HStack>

                        <HStack>
                            <HStack>
                                <Icon as={FaMapMarkerAlt} w={6} h={6} color="orange.500" />
                                <Text fontSize="xl" fontWeight="bold">
                                    Delivery Location:
                                </Text>
                            </HStack>
                            <Text fontSize="xl">{deliveryLocation}</Text>
                        </HStack>
                    </VStack>
                </Flex>

                <Divider />

                <VStack spacing={8} align="stretch">
                    <Heading as="h2" size="xl" textAlign="center">
                        Qualities
                    </Heading>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-around"
                        gap={8}
                    >
                        {qualities.map((quality, index) => (
                            <VStack key={index} spacing={3} textAlign="center" maxW="300px">
                                <Icon as={quality.icon} w={10} h={10} color="blue.500" />
                                <Heading as="h3" size="md">{quality.title}</Heading>
                                <Text>{quality.description}</Text>
                            </VStack>
                        ))}
                    </Flex>
                </VStack>
            </VStack>
        </Box>
    );
}

export default OfferingsPageTemplate;