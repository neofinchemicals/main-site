// src/pages/Contact.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white mt-16">
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-blue-900 mt-5 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We would love to hear from you. Please contact us via phone,
              email, or visit our offices.
            </motion.p>
          </div>

          {/* Responsive Grid: Map and Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-96 md:h-[450px] w-full">
                <iframe
                  title="Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.291627123934!2d72.914634!3d20.372956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0bdbdf1234567%3A0x123456789abcdef!2sB-102%2C%20Rajmoti-1%2C%20Chharwada%20Road%2C%20Vapi%2C%20Dist-%20Valsad%2C%20Gujarat%20-%20396191!5e0!3m2!1sen!2sin!4v1711023456789!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div
              className="bg-blue-50 p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-8 border-b border-blue-200 pb-4">
                Our Offices
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-blue-800 mb-2">
                    Office Address:
                  </p>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-green-500 text-2xl mr-3 mt-1" />
                    <span className="text-gray-700">
                      B-102, Rajmoti-1, Chharwada Road, Vapi, <br></br>Dist-
                      Valsad, Gujarat - 396191
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-blue-800 mb-2">Unit Address:</p>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-green-500 text-2xl mr-3 mt-1" />
                    <span className="text-gray-700">
                      F-332, Road No. 2, Gate No.1, Hoziwala Industrial Estate,
                      <br></br>Sachin, Surat, Gujarat - 394230
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-500 text-xl mr-3" />
                  <a
                    href="tel:+919974285868"
                    className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
                  >
                    +91-9974285868
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-green-500 text-xl mr-3" />
                  <a
                    href="mailto:info@neofinchemicals.com"
                    className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
                  >
                    info@neofinchemicals.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
