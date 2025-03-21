import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import CompanyProfile from "../components/home/CompanyProfile";
import MissionVision from "../components/home/MissionVision";
import ProductCategories from "../components/home/ProductCategories";
import WhatsAppButton from "../components/common/WhatsAppButton";
import OurServices from "../components/home/OurServices";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      <main className="mt-16">
        <Hero />
        <CompanyProfile />
        <MissionVision />
        <ProductCategories />
        <OurServices />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
