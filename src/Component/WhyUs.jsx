import React from "react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
const WhyUs = () => {
  return (
    <>
      <div className="bg-brightC text-center justify-center">
        <h2>Why Choose us</h2>
        <div>
          <div>
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h-8" src={img1} />
            </div>
            <p>Trusted Excellence</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
