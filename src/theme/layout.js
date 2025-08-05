import React from 'react';
import { Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Navigation from '../pages/navigation';
import Footer from '../pages/footer';
import { Fonts } from './Fonts';

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    brand: {
      100: "#F7FAFC",
      800: "#2D3748",
      900: "#1A202C",
    },
  },
});


function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box bg="brand.100" color="brand.800">
        <Navigation />
        <Box as="main" p={{ base: 4, md: 8 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default Layout;