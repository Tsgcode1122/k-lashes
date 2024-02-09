import { React, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Book from "../Component/Book";
import Footer from "../Component/Footer";

const Appointment = () => {
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-darkC">
        <Book />
        <Footer />
      </div>
    </>
  );
};

export default Appointment;
