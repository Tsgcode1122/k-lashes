import React from "react";
import img1 from "../images/la.png";
import img2 from "../images/las.png";
import img3 from "../images/lass.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
const WhyUs = () => {
  return (
    <>
      <div className="bg-brightC text-center justify-center p-4">
        <h2>Why Choose us</h2>
        <div className="flex flex-wrap justify-around">
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img1} alt="Icon 1" />
            </div>
            <p className="text-black text-center mt-2">Trusted Excellence</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img2} alt="Icon 2" />
            </div>
            <p className="text-black text-center mt-2">Lasting Impressions</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img3} alt="Icon 3" />
            </div>
            <p className="text-black text-center mt-2">Confidence Boost</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img1} alt="Icon 1" />
            </div>
            <p className="text-black text-center mt-2">Tailored Styles</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img2} alt="Icon 2" />
            </div>
            <p className="text-black text-center mt-2">Precision Artistry</p>
          </div>
          <div className="flex items-center flex-col mb-4 min-w-[150px]">
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
