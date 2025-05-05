import { Heading, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navigation({ onClose }) {
    const { colorMode } = useColorMode();
    return (
    <>
        <Heading size="lg" pb='20' textAlign="center" backgroundColor="#000">Lyman Rentals</Heading>
        <HStack gap="20" align="center" justifyContent="center" backgroundColor="#000">
            <IconButton 
                as={Link}
                to="/"
                aria-label="Home Page"
                variant="ghost"
                mb="8"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl" ml='3'>Home</Heading>
            </IconButton>
    
            <IconButton 
                as={Link}
                to="/work"
                aria-label="Work Page"
                variant="ghost"
                mb="8"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">What We Offer</Heading>
            </IconButton>

            <IconButton 
                as={Link}
                to="/about"
                aria-label="About Page"
                variant="ghost"
                mb="8"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">Contact Us</Heading>
            </IconButton>

            <IconButton 
                as={Link}
                to="/contact"
                aria-label="Contact Page"
                variant="ghost"
                mb="8"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                    color: colorMode === 'light' ? 'orange.500' : 'blue.500'
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="2xl">About Us</Heading>
            </IconButton>
        </HStack>
    </>
  );
}

export default Navigation;