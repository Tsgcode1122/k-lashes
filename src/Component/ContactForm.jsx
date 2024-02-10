import React, { useState } from "react";
import "../Gallary.css";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnqkdolz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 10000);
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 m-0  bg-darkC">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center">
          <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
          <span className="underline">Get in Touch with K.nicole</span>
          <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-10 font-tsg">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full custom-placeholder-opacity "
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full custom-placeholder-opacity"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Your Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full custom-placeholder-opacity"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded w-full custom-placeholder-opacity "
          ></textarea>
        </div>
        <div className="items-center text-center justify-center">
          <button
            type="submit"
            className="b border-2 bg-brightC font-tsg  rounded-xl p-2 inline-block hover:border-lightC "
          >
            Submit
          </button>
        </div>
      </form>

      {showSuccessMessage && (
        <div className="success-message bg-green-200 text-green-800 p-2 rounded mt-4">
          <p>Thanks for messaging K-Nicole Lashes!</p>
          <p>We'll respond to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
