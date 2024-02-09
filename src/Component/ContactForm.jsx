import React, { useState } from "react";
import "../Gallary.css";
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
    <div className="max-w-md mx-auto p-4">
      <div className="text-center">
        <h3>Get In Touch with Us</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-10">
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
        <div>
          <button
            type="submit"
            className="bg-brightC text-white py-2 px-4 rounded "
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
