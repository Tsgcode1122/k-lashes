import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import AboutUs from "../Component/AboutUs";
import WhyUs from "../Component/WhyUs";
import BeforeNafter from "../Component/BeforeNafter";

import ServiceLHome from "../Component/ServiceLHome";
import Gallary from "../Component/Gallary";
import PFlyer from "../Component/PFlyer";
import Reviews from "../Component/Reviews";
import ContactForm from "../Component/ContactForm";
import Faqs from "../Component/Faqs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyUs />
      <BeforeNafter />
      <ServiceLHome />
      <PFlyer />
      <Gallary />
      <Reviews />
      <Faqs />
      <ContactForm />
    </>
  );
};

export default Home;
