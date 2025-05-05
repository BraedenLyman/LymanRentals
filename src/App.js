import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, Box, Flex, Spacer } from '@chakra-ui/react';
import theme from './theme/theme';
import './theme/fonts/fonts.css';
import ColorToggle from './theme/colorModeToggle';
import Home from './pages/home';
import Navigation from './pages/navigation';

function App() {
    return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
      <Router>
          {/* Header stays visible */}
          <Box p={4} position="absolute">
            <Flex>
              <ColorToggle />
            </Flex>
          </Box>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </ChakraProvider>
    </>
  );
}

export default App;