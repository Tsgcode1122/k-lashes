import React from "react";
import img1 from "../images/la.png";
import img2 from "../images/las.png";
import img3 from "../images/lass.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
const WhyUs = () => {
  return (
    <>
      <div className="bg-brightC text-center justify-center p-4">
        <h2 className="text-xl font-bold mb-4 flex font-tsgDancing items-center justify-center">
          <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
          <span className="underline">Why Choose K.nicole?</span>
          <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
        </h2>
        <div className="flex flex-wrap justify-around font-tsg">
          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2 ">
              <img className="max-w-full h-8" src={img1} alt="Icon 1" />
            </div>
            <p className="text-black text-center mt-2">Trusted Excellence</p>
          </div>

          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img2} alt="Icon 2" />
            </div>
            <p className="text-black text-center mt-2">Lasting Impressions</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img3} alt="Icon 3" />
            </div>
            <p className="text-black text-center mt-2">Confidence Boost</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img1} alt="Icon 1" />
            </div>
            <p className="text-black text-center mt-2">Tailored Styles</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img2} alt="Icon 2" />
            </div>
            <p className="text-black text-center mt-2">Precision Artistry</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[200px] border-2 border-solid border-brightC rounded-md p-4 shadow-md p-4">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img3} alt="Icon 3" />
            </div>
            <p className="text-black text-center mt-2">
              Distinctive Selections
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
