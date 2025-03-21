import React, { useEffect } from "react";
import ProductList from "../components/products/ProductList";
import MoleculeBackground from "../components/products/MoleculeBackground";
import OurServices from "../components/home/OurServices"
import WhatsAppButton from "../components/common/WhatsAppButton";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gray-50 mt-16">
        {/* Full-page Molecule Background */}
        <MoleculeBackground />
        {/* Main Content over background */}
        <div className="relative z-10">
          <ProductList />
          <OurServices />
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Products;
