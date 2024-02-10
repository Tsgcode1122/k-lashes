import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa"; // Import other icons as needed
import logoimg from "../images/K.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-brightC text-black p-8 text-center font-tsg border-t-2 border-lightC">
        <div className="pb-3">
          <h3 className="font-bold "> Cancellation Policy: </h3>
          <p>Please give us 24hrs notice before canceling your appointment.</p>
        </div>
        {/* Quick Links */}
        <div className="pb-3">
          <h3 className="font-bold">Quick Links</h3>
          <div className="flex flex-wrap justify-around  ">
            <Link to="/">Home</Link>
            <Link to="/Appointment">Appointment</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Services">Services</Link>
          </div>
        </div>
        {/* Work Hours */}
        <div className="mb-8">
          <h3 className="font-bold">Work Hours</h3>
          <p> Monday to Friday 9 AM - 6 PM</p>
        </div>
        {/* Social Icons */}
        <div className="pb-5">
          <h3 className="font-bold pb-3">Contact Us</h3>
          <div className="flex items-center justify-center space-x-4 ">
            <Link
              to="https://www.instagram.com/k.nicolelashesllc?igsh=MWpubHh1dms1eDd6ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="https://www.tiktok.com/@_kierranicole?_t=8jlglpY2R4n&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={20} />
            </Link>
            <Link to="mailto:your.email@example.com">
              <FaEnvelope size={20} />
            </Link>
            <Link to="tel:+1234567890">
              <FaPhone size={20} />
            </Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p>&copy; 2024 K-nicolelashes All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
