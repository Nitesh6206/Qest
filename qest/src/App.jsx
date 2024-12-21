import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import ServicePage from "./components/SerivicePage";
import PricingPage from "./components/PricingPage";
import SupportPage from "./components/SupportPage";

const App = () => {
  return (
    <Router>
      {/* Header remains visible across all pages */}
      <Header />

      {/* Define your routes here */}
      <Routes>
        {/* Root path or home page */}
        <Route path="/" element={<LandingPage />} />

        {/* Services page — update if your route is /services or /solutions */}
        {/* <Route path="/services" element={<ServicePage />} /> */}
        {/* If you have a separate Solutions page, you can do: 
            <Route path="/solutions" element={<SolutionsPage />} /> 
        */}

        {/* Pricing page */}
        <Route path="/pricing" element={<PricingPage />} />

        {/* Support page */}
        <Route path="/support" element={<SupportPage />} />
      </Routes>

      {/* Footer remains visible across all pages */}
      <Footer />
    </Router>
  );
};

export default App;
