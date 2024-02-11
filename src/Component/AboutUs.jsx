import React from "react";

import owner from "../images/knicole2.jpg";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const AboutUs = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <div className="p-4 bg-darkC justify-center text-center sm:px-6 lg:px-48 lg:flex lg:text-center lg:px- lg:justify-center lg:items-center lg:gap-4 xl:h-[60vh]">
        <div className="lg:w-1/2 lg:mr-6">
          <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center">
            <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
            <span className="underline">About Us</span>
            <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
          </h2>

          <h4 className="font-bold font-tsg">GET TO KNOW K.NICOLE</h4>
          <article className="pt-2 pb-2 font-tsg xl:text-xl left-in">
            I'm K-Nicole, your passionate lash artist, dedicated to redefining
            your beauty with precision. My commitment is to provide gorgeous
            lash extensions that enhance your natural beauty. With personalized
            styles and a touch of glamour, choose excellence and let your beauty
            shine at K-Nicole Lashes.
          </article>
        </div>
        <div className="  border-4 border-solid border-brightC p-4 rounded-2xl inline-block lg:w-1/2">
          <img
            className=" max-w-full h-96 rounded-2xl lg:h-auto lg:w-auto xl:h-[400px] xl:max-w-full xl:items-center justify-center"
            src={owner}
            alt="Owner"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
