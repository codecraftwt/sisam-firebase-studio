import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/Services/ServicesOverview";
import Logistics from "./pages/Services/Logistics";
import BulkLiquid from "./pages/Services/BulkLiquid";
import FlexiTank from "./pages/Services/FlexiTank";
import IsoTanks from "./pages/Services/IsoTanks";
import Agency from "./pages/Services/Agency";
import LifeAtSisam from "./pages/LifeAtSisam";
import Contact from "./pages/Contact";
import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollSection from "./components/subcomponents/animated/LogisticsScrollSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-surface text-text font-sans overflow-x-hidden">
        <StarField />
        {/* <Navbar /> */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/logistics" element={<Logistics />} />
            <Route path="/services/bulk-liquid" element={<BulkLiquid />} />
            <Route path="/services/bulk-liquid/flexi-tank" element={<FlexiTank />} />
            <Route path="/services/bulk-liquid/iso-tanks" element={<IsoTanks />} />
            <Route path="/services/agency" element={<Agency />} />
            <Route path="/life-at-sisam" element={<LifeAtSisam />} />
            <Route path="/contact-us" element={<Contact />} />

            {/* Added by viki */}
            <Route path="/terminal" element={<ScrollSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
