import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa"; // Import other icons as needed
import logoimg from "../images/K.png";
const Footer = () => {
  return (
    <footer className="bg-brightC text-black p-8 text-center">
      <div>
        <p>
          Cancellation Policy: Please give us 24hrs notice before canceling your
          appointment.
        </p>
      </div>
      {/* Quick Links */}
      <div className="p-4">
        <h3 className="font-bold">Quick Links</h3>
        <div className="flex flex-wrap justify-around mb-8">
          <a href="/">Home</a>
          <a href="/appointment">Appointment</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </div>
      </div>
      {/* Work Hours */}
      <div className="mb-8">
        <h3 className="font-bold">Work Hours</h3>
        <p> Monday to Friday 9 AM - 6 PM</p>
      </div>

      {/* Social Icons */}
      <div>
        <h3 className="font-bold">Contact Us</h3>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={30} />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={30} />
          </a>
          <a href="tel:+1234567890">
            <FaPhone size={30} />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center">
        <p>&copy; 2024 K-nicolelashes All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
