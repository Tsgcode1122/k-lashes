import React from "react";
import img1 from "../images/IMG_59.jpg";
import img2 from "../images/IMG_58.jpg";
import img3 from "../images/IMG_57.jpg";
import img4 from "../images/IMG_56.jpg";
import img5 from "../images/IMG_55.jpg";
import img6 from "../images/IMG_54.jpg";
import "../Gallary.css"; 

const Gallary = () => {
  return (
    <>
      <div className="gallery-container">
        <h2>Gallary</h2>
        <p>Lashes On The 'Gram</p>
        <div className="image-grid">
          <img src={img1} alt="Image 1" className="gallery-image" />
          <img src={img2} alt="Image 2" className="gallery-image" />
          <img src={img4} alt="Image 3" className="gallery-image" />
          <img src={img3} alt="Image 4" className="gallery-image" />
          <img src={img6} alt="Image 5" className="gallery-image" />
          <img src={img5} alt="Image 6" className="gallery-image" />
        </div>
      </div>
    </>
  );
};

export default Gallary;
