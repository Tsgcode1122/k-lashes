import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import ContactForm from "../Component/ContactForm";
import Socials from "../Component/Socials";
import Footer from "../Component/Footer";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-darkC">
        <ContactForm />
        <Socials />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
