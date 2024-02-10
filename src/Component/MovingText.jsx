import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import img1 from "../images/la.png";
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
        className="text-[15px] text-white font-tsg flex"
      >
        <span className="ml-8 items-center flex">
          <img className="h-4" src={img1} /> Choose Excellence
        </span>
        <span className="ml-8 items-center flex">
          <img className="h-4" src={img1} /> Your Eyes, Our Masterpiece
        </span>
        <span className="ml-8 items-center flex">
          <img className="h-4" src={img1} /> Blink Beautifully
        </span>
        <span className="ml-8 items-center flex">
          <img className="h-4" src={img1} /> Glamour & Confidence
        </span>
        <span className="ml-8 items-center flex">
          <img className="h-4" src={img1} /> Simply Stunning, Always Lashed
        </span>
      </motion.p>
    </div>
  );
};

export default MovingText;
