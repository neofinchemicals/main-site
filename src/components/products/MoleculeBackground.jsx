import React from "react";
import { motion } from "framer-motion";

const MoleculeBackground = () => {
  // Pre-defined positions for circles (you can adjust or randomize for more variety)
  const circles = [
    { cx: 100, cy: 150, r: 4 },
    { cx: 200, cy: 80, r: 5 },
    { cx: 300, cy: 200, r: 3 },
    { cx: 400, cy: 120, r: 4 },
    { cx: 500, cy: 180, r: 5 },
    { cx: 650, cy: 100, r: 4 },
    { cx: 750, cy: 250, r: 3 },
  ];

  // Animation variants for circles
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.2 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      {circles.map((circle, index) => (
        <motion.circle
          key={index}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          fill="#60a5fa"
          variants={circleVariants}
          animate="animate"
        />
      ))}
      {/* Connecting lines between circles */}
      <motion.line
        x1="100"
        y1="150"
        x2="200"
        y2="80"
        stroke="#60a5fa"
        strokeWidth="1"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="200"
        y1="80"
        x2="300"
        y2="200"
        stroke="#60a5fa"
        strokeWidth="1"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="300"
        y1="200"
        x2="400"
        y2="120"
        stroke="#60a5fa"
        strokeWidth="1"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.line
        x1="400"
        y1="120"
        x2="500"
        y2="180"
        stroke="#60a5fa"
        strokeWidth="1"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
    </motion.svg>
  );
};

export default MoleculeBackground;
