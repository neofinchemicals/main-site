import React from "react";
import { motion } from "framer-motion";
import productData from "../../data/productData";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-green-500 mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      {productData.map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2 mb-4">
            {category.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
