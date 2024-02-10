import React from "react";
import img1 from "../images/IMG_59.jpg";
import img2 from "../images/IMG_58.jpg";
import img3 from "../images/IMG_57.jpg";
import img4 from "../images/IMG_56.jpg";
import img5 from "../images/IMG_55.jpg";
import img6 from "../images/IMG_54.jpg";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import kflyer2 from "../images/kflyer1.jpg";
import "../Gallary.css";

const Gallary = () => {
  return (
    <>
      <div className="gallery-container">
        <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center">
          <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
          <span className="underline">Gallery</span>
          <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
        </h2>
        <h4 className="font-bold font-tsg pb-4">LASHES ON THE 'GRAM</h4>

        <div className="image-grid">
          <img src={img1} alt="Image 1" className="gallery-image" />
          <img src={img2} alt="Image 2" className="gallery-image" />
          <img src={img4} alt="Image 3" className="gallery-image" />
          <img src={img3} alt="Image 4" className="gallery-image" />
          <img src={img6} alt="Image 5" className="gallery-image" />
          <img src={img5} alt="Image 6" className="gallery-image" />
        </div>
        <img src={kflyer2} className="pt-4" />
      </div>
    </>
  );
};

export default Gallary;
