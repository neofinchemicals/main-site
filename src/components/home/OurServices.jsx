// src/components/home/OurServices.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import buyer from "../../assets/images/buyer.jpg";
import seller from "../../assets/images/saller.jpg";
import visiting from "../../assets/images/visiting.jpg";

const services = [
  {
    title: "Buyer Representative",
    description:
      "Expert representation to ensure your purchasing needs are met efficiently and effectively.",
    image: buyer,
  },
  {
    title: "Seller Representative",
    description:
      "Strategic support to maximize value and streamline your selling process.",
    image: seller,
  },
  {
    title: "Factory & Plant Visit/Audit",
    description:
      "Comprehensive inspection services to verify quality and compliance standards.",
    image: visiting,
  },
];

const ServiceCard = ({ title, description, image }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="w-full sm:w-80 md:w-72 bg-white rounded-xl overflow-hidden m-4 shadow-md transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive representation and inspection services to
            meet your business needs with excellence and integrity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
