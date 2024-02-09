import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import ServiceList from "../Component/ServiceList";
import Gallary from "../Component/Gallary";
import PFlyer from "../Component/PFlyer";
import Footer from "../Component/Footer";

const Services = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-lightC">
        <ServiceList />
        <Gallary />
      </div>
      <PFlyer />
      <Footer />
    </>
  );
};

export default Services;
