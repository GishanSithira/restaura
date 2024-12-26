import React from "react";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Experties from "./components/Experties";
import Review from "./components/Review";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-100 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Experties />
      <Review />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
