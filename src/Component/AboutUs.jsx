import React from "react";

import owner from "../images/own.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="p-4 bg-darkC justify-center text-center ">
        <h2>About Us</h2>
        <h4>GET TO KNOW US</h4>
        <article className="pt-2 pb-2">
          Discover the artistry that defines K-NicoleLashes. I'm K-Nicole, a
          passionate lash artist dedicated to redefining your beauty with
          precision. From personalized styles that enhance your unique features
          to creating a world of glamour, confidence, and lasting impressions.
          Choose excellence and let your beauty take center stage with
          K-NicoleLashes.
        </article>
        <div className="border-4 border-solid border-brightC p-4 m-6 rounded-2xl inline-block">
          <img className=" h-60 w-60  rounded-2xl" src={owner} alt="Owner" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
