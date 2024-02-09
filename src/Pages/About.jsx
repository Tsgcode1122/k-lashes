import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import AboutUs from "../Component/AboutUs";
import Reviews from "../Component/Reviews";
import Faqs from "../Component/Faqs";
import Footer from "../Component/Footer";
const About = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-darkC">
        <AboutUs />
        <Reviews />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default About;
