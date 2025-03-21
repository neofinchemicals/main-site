import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "+91 9974285868";
  const message = "Hello, I would like to inquire about your products.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const textVariants = {
    initial: { x: 50, opacity: 0 },
    hover: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 flex items-center"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <motion.div
        variants={textVariants}
        transition={{ duration: 0.3 }}
        className="mr-3 bg-white text-black px-4 py-2 rounded-full shadow-md"
      >
        Connect us
      </motion.div>
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 p-4 rounded-full shadow-xl"
      >
        <FaWhatsapp size={24} color="#25D366" />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
