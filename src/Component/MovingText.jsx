import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const MovingText = () => {
  const textVariants = {
    initial: { x: "40%" },
    animate: {
      x: "-100%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div
      className="bg-zinc-800 p-2"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
      }}
    >
      <motion.p
        variants={textVariants}
        initial="initial"
        animate={controls}
        className="text-lg text-white flex"
      >
        <span className="ml-4">Choose Excellence</span>
        <span className="ml-4">Your Eyes, Our Masterpiece</span>
        <span className="ml-4">Blink Beautifully</span>
        <span className="ml-4">Glamour & Confidence</span>
        <span className="ml-4">Simply Stunning, Always Lashed</span>
      </motion.p>
    </div>
  );
};

export default MovingText;
