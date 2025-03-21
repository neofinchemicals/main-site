import React, { useEffect } from "react";
import { motion } from "framer-motion";
import InquiryForm from "../components/inquiry/InquiryForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../components/common/WhatsAppButton";

const Inquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-500 pt-28 pb-16 px-4 overflow-hidden relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{ zIndex: 0 }}
        >
          {/* Animated circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Light beams */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute bg-gradient-to-r from-blue-800 to-transparent"
              style={{
                height: "2px",
                width: "100%",
                top: `${Math.random() * 100}%`,
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: [0, 0.5, 0],
                rotate: Math.random() * 20 - 10,
              }}
              transition={{
                duration: Math.random() * 8 + 12,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 3,
              }}
            />
          ))}
        </motion.div>

        <motion.section
          className="max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Inquiry Form
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-green-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <InquiryForm />
        </motion.section>

        <ToastContainer />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Inquiry;
