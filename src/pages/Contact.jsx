import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CanvasBackground from "../components/home/CanvasBackground"; // Adjust path if needed

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden mt-16">
      {/* Canvas-based animated background */}
      <CanvasBackground />

      {/* Main Content (z-10) */}
      <motion.section
        className="pt-16 pb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-blue-100 mt-5 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="max-w-2xl mx-auto text-blue-300 mb-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We would love to hear from you. Please contact us via phone,
              email, or visit our offices.
            </motion.p>
          </motion.div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Card (Full width on mobile, 2/3 on desktop) */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden lg:col-span-2 order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-96 md:h-[450px] w-full">
                <iframe
                  title="Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.539423178548!2d72.91677561486963!3d19.19523218708417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b65d9ddc6d1b%3A0x8c5a50cd48e6a2e!2sSachin%2C%20Surat%2C%20Gujarat%20394230!5e0!3m2!1sen!2sin!4v1680309204170!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b border-blue-200 pb-4">
                Our Offices
              </h3>
              <div className="space-y-8">
                <motion.div
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-bold text-blue-800 mb-2">
                    Office Address:
                  </p>
                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 text-white">
                      <FaMapMarkerAlt className="text-xl text-blue-700" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-800 transition-colors duration-300">
                      B-102, Rajmoti-1, Chharwada Road, Vapi,
                      <br />
                      Dist- Valsad, Gujarat - 396191
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-bold text-blue-800 mb-2">Unit Address:</p>
                  <div className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 text-white">
                      <FaMapMarkerAlt className="text-xl text-blue-700" />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-800 transition-colors duration-300">
                      F-332, Road No. 2, Gate No.1, Hoziwala Industrial Estate,
                      Sachin, Surat, Gujarat - 394230
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 text-blue-700">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <a
                      href="tel:+919974285868"
                      className="text-gray-700 group-hover:text-green-600 transition-colors duration-300 font-medium"
                    >
                      +91-9974285868
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-lg mr-4 text-white">
                      <FaEnvelope className="text-xl text-blue-700" />
                    </div>
                    <a
                      href="mailto:info@neofinchemicals.com"
                      className="text-gray-700 group-hover:text-green-600 transition-colors duration-300 font-medium"
                    >
                      info@neofinchemicals.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
