import { React, useEffect } from "react";
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
import Socials from "../Component/Socials";
import Book from "../Component/Book";
import Footer from "../Component/Footer";
import Policy from "../Component/Policy";
import ScrollToTopButton from "../Component/ScrollToTopButton";

const Home = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Policy />
      <WhyUs />
      <BeforeNafter />
      <ServiceLHome />
      <PFlyer />
      <Gallary />
      <Reviews />
      <Faqs />
      <ContactForm />
      <Socials />
      <Book />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
