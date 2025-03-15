// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white mt-16">
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.span
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-3"
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
            className="max-w-2xl mx-auto text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We would love to hear from you. Please contact us via phone, email,
            or visit our offices.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Our Offices
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-700 mb-1">Office Address:</p>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-500 text-2xl mr-3 mt-1" />
                  <span className="text-gray-700">
                    B-102, Rajmoti-1, Chharwada Road, Vapi,<br></br>
                    Dist- Valsad, Gujarat - 396191
                  </span>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-1">Unit Address:</p>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-green-500 text-2xl mr-3 mt-1" />
                  <span className="text-gray-700">
                    F-332, Road No. 2, Gate No.1, Hoziwala Industrial Estate,
                    Sachin, Surat, Gujarat - 394230
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-500 text-xl mr-3" />
                <a
                  href="tel:+919974285868"
                  className="text-gray-700 hover:text-green-500 transition-colors duration-300"
                >
                  +91-9974285868
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-500 text-xl mr-3" />
                <a
                  href="mailto:info@neofinchemicals.com"
                  className="text-gray-700 hover:text-green-500 transition-colors duration-300"
                >
                  info@neofinchemicals.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Replace the src with your actual map embed URL */}
            <iframe
              title="Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.539423178548!2d72.91677561486963!3d19.19523218708417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b65d9ddc6d1b%3A0x8c5a50cd48e6a2e!2sSachin%2C%20Surat%2C%20Gujarat%20394230!5e0!3m2!1sen!2sin!4v1680309204170!5m2!1sen!2sin"
              className="w-full h-96"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
