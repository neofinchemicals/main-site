// src/components/home/MissionVision.jsx
import React from "react";
import { motion } from "framer-motion";
import CanvasBackground from "./CanvasBackground";

const MissionVision = () => {
  return (
    <motion.section
      className="relative py-16 bg-sky-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Canvas-based Animated Background */}
      <CanvasBackground />
      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 bg-green-100 text-blue-300 rounded-full text-sm font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Commitment
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-100 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mission & Vision
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to fulfill industry needs by developing and
              supplying products while keeping environmental and social
              responsibilities at the forefront of our operations.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be recognized as your one‑stop shop for all
              product needs within an ESG framework—delivering excellence,
              sustainability, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;
