import { Heading, IconButton, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navigation({ onClose }) {
    return (
    <>
        <Heading 
            size="lg" 
            pb='10' 
            textAlign="center"
            position="sticky"
            top="0"
            zIndex="sticky"
            backgroundColor="#000"
        >
            Lyman Rentals
        </Heading>
        <HStack 
            justifyContent="space-around" 
            borderBottom="2px solid black"
            position="sticky"
            top="10"
            zIndex="sticky" 
            backgroundColor="#000"
        >
            <IconButton 
                as={Link}
                to="/"
                aria-label="Home Page"
                variant="ghost"
                mb="3"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="md">Home</Heading>
            </IconButton>
    
            <IconButton 
                as={Link}
                to="/what-we-offer"
                aria-label="What We Offer Page"
                variant="ghost"
                mb="3"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="md">What We Offer</Heading>
            </IconButton>

            <IconButton 
                as={Link}
                to="/contact"
                aria-label="Contact Us Page"
                variant="ghost"
                mb="3"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="md">Contact Us</Heading>
            </IconButton>

            <IconButton 
                as={Link}
                to="/about"
                aria-label="About Us Page"
                variant="ghost"
                mb="3"
                onClick={onClose}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                _active={{
                    transform: 'scale(0.95)'
                }}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
                <Heading size="md">About Us</Heading>
            </IconButton>
        </HStack>
    </>
  );
}

export default Navigation;