import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './theme/scrollToTop';
import Layout from './theme/layout';
import Home from './pages/home';
import TermsOfService from './pages/legal/termsOfService';
import PrivacyPolicy from './pages/legal/privacyPolicy';
import Offer from './pages/whatWeOffer';
import Contact from './pages/companyInfo/contact';
import About from './pages/companyInfo/about';
import WhiskeyBarrelTablePage from './pages/items/whiskeyBarrelTables';
import BenchesPage from './pages/items/benches';
import ArchesPage from './pages/items/arches';
import WhiskeyBarrelBarPage from './pages/items/whiskeyBarrelBar';
import ChestCoffeeTable from './pages/items/chestCoffeeTable';
import DeserLadder from './pages/items/desertLadder';
import MemoryLadder from './pages/items/memoryLadder';
import OrderOfEvents from './pages/items/orderOfEvents';
import CandleLanterns from './pages/items/candleLanterns';
import Decorations from './pages/items/decorations';
import EdisonLights from './pages/items/edisonLights';
import PhotoBackdrop from './pages/items/photoBackdrop';
import WaterJugs from './pages/items/waterJugs';
import StockTanks from './pages/items/stockTanks';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/what-we-offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/whiskey-barrel-tables" element={<WhiskeyBarrelTablePage />} />
          <Route path="/benches" element={<BenchesPage />} />
          <Route path="/arches" element={<ArchesPage />} />
          <Route path="/whiskey-barrel-bar" element={<WhiskeyBarrelBarPage />} />
          <Route path="/chest-coffee-table" element={<ChestCoffeeTable />} />
          <Route path="/desert-ladder" element={<DeserLadder />} />
          <Route path="/memory-ladder" element={<MemoryLadder />} />
          <Route path="/order-of-events" element={<OrderOfEvents />} />
          <Route path="/candle-lanterns" element={<CandleLanterns />} />
          <Route path="/decorations" element={<Decorations />} />
          <Route path="/edison-lights" element={<EdisonLights />} />
          <Route path="/photo-backdrop" element={<PhotoBackdrop />} />
          <Route path="/water-jugs" element={<WaterJugs />} />
          <Route path="/stock-tanks" element={<StockTanks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;