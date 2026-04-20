import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer";
//import Menu from "../src/components/Menu/Menu";
import Cafe from "./components/Cafe/Cafe";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "../src/components/Gallery";
import BoardingDetails from "./components/Boarding/BoardingDetails";
import GroomingDetails from "./components/Grooming/GroomingDetails";
import Veterinary from "./components/Veterinary/Veterinary";
//import FloatingContact from './components/FloatingContact';
import SwimmingPool from "./components/SwimmingPool/SwimmingPool";
import PickAndDrop from "./components/PickAndDrop/PickAndDrop";
import Training from "./components/Training/Training";
import Playground from "./components/Playground/Playground";
import ShoppingBoutique from "./components/ShoppingBoutique/ShoppingBoutique";

function App() {
  return (
    <Router>
      
      {/* ADD IT HERE! This makes it float over every single page automatically. */}
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
          exact
        />
        <Route path="/contactus" element={<ContactUs />} exact />
        
        <Route path="/services/cafe" element={<Cafe />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/services/boarding" element={<BoardingDetails />} />
        <Route path="/services/grooming" element={<GroomingDetails />} />
        <Route path="/services/Veterinary" element={<Veterinary />} />
        <Route path="/services/pool" element={<SwimmingPool />} />
        <Route path="/services/transport" element={<PickAndDrop />} />
        <Route path="/services/training" element={<Training />} />
        <Route path="/services/playground" element={<Playground />} />
        <Route path="/services/boutique" element={<ShoppingBoutique />} />
      </Routes>
    </Router>
  );
}

export default App;