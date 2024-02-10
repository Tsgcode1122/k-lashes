import React from "react";
import backgroundImage from "../images/Hero.jpg";
import kk from "../images/kk.jpg";
import own from "../images/own.jpg";
import pink from "../images/pink.jpg";
import gif from "../images/blinking.gif";
import pastel from "../images/pastel.jpg";
import lashB from "../images/lashb.jpg";
import { Link } from "react-router-dom";
import MovingText from "./MovingText";
import "../Design.css";
import "../Gallary.css";
const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${pink})`,
  };
  const bStyle = {
    backgroundImage: `url(${lashB})`,
  };

  return (
    <>
      <div
        className="m-0 px-4 pt-20 bg-cover bg-center justify-center text-center sm:px-6 xl:flex xl:flex-row-reverse xl:text-center xl:h-[90vh] xl:px-16 xl:justify-center xl:items-center xl:gap-4"
        style={bStyle}
      >
        <div className=" justify-center text-center   pt-20 pb-5 text-black sm:pt-24 xl:w-1/2">
          <div>
            <h1 className=" text-4xl md:text-5xl font-extrabold font-tsgDancing xl:text-6xl ">
              Elevate Your Beauty with K.NicoleLashes
            </h1>
            <h3 className="  text-xl font-tsg p-2 md:text-[18px]  xl:text-2xl ">
              Where Every Blink Speaks Confidence
            </h3>
            <Link to="/Appointment" className="z-40 relative ">
              <div className="b border-2 bg-black text-white  font-medium font-tsg rounded-xl p-2 inline-block hover:border-brightC  hover:bg-transparent hover:text-black lg:text-xl">
                Book Now!!!
              </div>
            </Link>
            <div className="flex justify-center items-center">
              <img src={gif} className="max-w-full h-8" alt="Animated GIF" />
            </div>
            <div className="area z-10 ">
              <ul className="circles absolute">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4  bg-brightC rounded-box bg-cover bg-center   xl:items-center  xl:p-8 xl:w-1/2">
          <div className="carousel-item">
            <img src={own} className="rounded-box  max-w-full  w-72 h-80" />
          </div>
          <div className="carousel-item">
            <img
              src={backgroundImage}
              className="rounded-box  max-w-full   w-72 h h-80"
            />
          </div>
          <div className="carousel-item">
            <img src={kk} className="rounded-box  max-w-full  w-72 h-80" />
          </div>
        </div>
      </div>
      <MovingText />
    </>
  );
};

export default Hero;
