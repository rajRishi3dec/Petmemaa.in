import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer";
import Menu from "../src/components/Menu/Menu";
import Cafe from "./components/Cafe/Cafe";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs/ContactUs"


function App() {
  return (
    <Router>
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
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/cafe" element={<Cafe />} exact />
        <Route path="/services" element={<Services />} exact />
      </Routes>
    </Router>
  );
}

export default App;
