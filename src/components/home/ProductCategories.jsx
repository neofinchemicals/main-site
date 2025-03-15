import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  // Updated product data with revised descriptions
  const productData = [
    {
      name: "Fine Chemicals",
      description:
        "Our range of fine chemicals is tailored for precision manufacturing and specialized industrial applications, ensuring the highest quality and performance.",
      image: "/path/to/industrial.jpg",
      path: "/products/industrial",
    },
    {
      name: "Pharmaceutical Ingredients",
      description:
        "Premium pharmaceutical ingredients that meet strict quality and purity standards, essential for safe and effective medical formulations.",
      image: "/path/to/pharma.jpg",
      path: "/products/pharmaceutical",
    },
    {
      name: "Agricultural Solutions",
      description:
        "Innovative and sustainable agricultural solutions designed to boost crop yield, protect plants, and promote eco-friendly farming practices.",
      image: "/path/to/agri.jpg",
      path: "/products/agricultural",
    },
    {
      name: "Intermediates",
      description:
        "High-grade chemical intermediates that serve as essential building blocks in numerous industrial and pharmaceutical processes.",
      image: "/path/to/intermediates.jpg",
      path: "/products/intermediates",
    },
    {
      name: "Pesticides",
      description:
        "Advanced pesticide formulations that offer effective pest control while prioritizing environmental safety and sustainability.",
      image: "/path/to/pesticides.jpg",
      path: "/products/pesticides",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Products
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Product Categories
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore our comprehensive range of chemical solutions designed to
            meet diverse industry needs with quality and sustainability in mind.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
          {productData.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-blue-100 relative">
                {/* Use product.image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/60 flex items-center justify-center">
                  <h4 className="text-2xl font-bold text-white px-4 text-center">
                    {product.name}
                  </h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {product.description}
                </p>
                <div className="flex space-x-3">
                  <Link
                    to={product.path}
                    className="flex-1 py-2 px-4 text-center bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/inquiry"
                    className="flex-1 py-2 px-4 text-center bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    Inquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductCategories;
