import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate(`/inquiry?product=${encodeURIComponent(product.name)}`);
  };

  return (
    <motion.div
      className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h4 className="text-lg font-bold text-blue-800">{product.name}</h4>
      <p className="text-gray-600 text-sm">CAS No: {product.casNo}</p>
      <button
        onClick={handleInquiry}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        Inquiry
      </button>
    </motion.div>
  );
};

export default ProductCard;
