import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutCompanyPage from "./Pages/AboutCompanyPage";
import AwardsPage from "./Pages/AwardsPage";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Reuse/Navbar";
import Footer from "./Components/Reuse/Footer";
import DamMonitoring from "./Pages/Services/DamMonitoring";
import ScadaAutomation from "./Pages/Services/ScadaAutomation";
function App() {
  return (
    <BrowserRouter>
      {/* Global layout wrapper */}
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar (fixed top if needed) */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow pt-20 sm:pt-24"> 
          {/* pt-* ensures content doesn't hide behind navbar if it's fixed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutCompanyPage" element={<AboutCompanyPage />} />
            <Route path="/awardsPage" element={<AwardsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/dam-monitoring" element={<DamMonitoring />} />
             <Route path="/services/scada-automation" element={<ScadaAutomation />} />
          </Routes>
        </main>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
