import React from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from '../pages/navigation';
import Footer from '../pages/footer';

function Layout({ children }) {
  return (
    <Box>
      <Navigation />
      <Box as="main" p={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;