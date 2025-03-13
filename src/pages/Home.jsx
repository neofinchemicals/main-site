import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import CompanyProfile from "../components/home/CompanyProfile";
import MissionVision from "../components/home/MissionVision";
import ProductCategories from "../components/home/ProductCategories";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <CompanyProfile />
        <MissionVision />
        <ProductCategories />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
