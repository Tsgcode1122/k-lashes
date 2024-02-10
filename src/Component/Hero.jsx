import React from "react";
import backgroundImage from "../images/Hero.jpg";
import kk from "../images/kk.jpg";
import own from "../images/own.jpg";
import pink from "../images/pink.jpg";
import pastel from "../images/pastel.jpg";
import lashB from "../images/lashb.jpg";
import { Link } from "react-router-dom";
import MovingText from "./MovingText";

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
        className=" m-0 pl-4 pr-4   pt-20   bg-cover bg-center justify-center text-center"
        style={bStyle}
      >
        <div className=" justify-center text-center   pt-20 pb-5 justify-end text-black">
          <h1 className=" text-4xl font-bold font-tsgDancing ">
            Elevate Your Beauty with K.NicoleLashes
          </h1>
          <h3 className="  text-xl  p-2   ">
            Where Every Blink Speaks Confidence
          </h3>
          <Link to="/Appointment">
            <div className="b border-2  rounded-xl p-2 inline-block ">
              Book Now!!!
            </div>
          </Link>
        </div>
        <div
          className="carousel carousel-center max-w-md p-4 space-x-4  bg-brightC rounded-box bg-cover bg-center "
          // style={divStyle}
        >
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
