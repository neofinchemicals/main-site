import React, { useEffect } from "react";
import ProductList from "../components/products/ProductList";
import MoleculeBackground from "../components/products/MoleculeBackground";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50 mt-16">
      {/* Full-page Molecule Background */}
      <MoleculeBackground />
      {/* Main Content over background */}
      <div className="relative z-10">
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
