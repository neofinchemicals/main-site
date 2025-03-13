import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaLeaf, FaAward, FaRegLightbulb } from "react-icons/fa";
import profileImg from "../../assets/images/company-profile.jpg";

const CompanyProfile = () => {
  const features = [
    {
      icon: <FaFlask />,
      title: "Quality Products",
      description:
        "ISO-certified chemicals meeting the highest industry standards",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable Approach",
      description: "Eco-friendly processes and green chemistry principles",
    },
    {
      icon: <FaAward />,
      title: "Industry Leadership",
      description: "25+ years of chemical manufacturing excellence",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Innovation Focus",
      description: "Continuous R&D to develop cutting-edge solutions",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <motion.section
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
              Our Company
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Neofin Chemicals
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-green-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Side */}
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[320px]">
                <img
                  src={profileImg}
                  alt="Neofin Chemicals Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-blue-900/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-sm">
                Established in 1996
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="md:w-1/2 p-8 md:p-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Pioneering Chemical Excellence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Neofin Chemicals, we deliver innovative solutions built on
                quality and sustainability. Our specialized expertise and
                unwavering dedication drive our commitment to excellence,
                ensuring that every product meets the highest standards in the
                industry.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                From industrial applications to specialized formulations, we
                provide comprehensive chemical solutions tailored to meet unique
                challenges across diverse sectors.
              </p>

              <div className="flex space-x-4">
                <motion.button
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Our Products
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-50 rounded-lg transition duration-300"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className={`p-8 flex flex-col items-center text-center ${
                  idx < features.length - 1 ? "lg:border-r border-gray-100" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl text-green-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyProfile;
