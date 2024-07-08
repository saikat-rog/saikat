import React, { useState } from "react";
import { handleEmailClick } from "./Welcome";
import Axios from 'axios';

const Contact = () => {
  // formdata state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handles form input value change
  const handleFormInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handles Submit Button behaviour
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await Axios.post(
        "https://saikatbackend.vercel.app/api/submitContactForm",
        formData, // Send formData directly as the request body
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      alert("Form Submitted");
  
      console.log(response.data); // Log response data
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  }

  return (
    <div className="min-h-screen w-full bg-deepdark pl-10 pr-10 pt-28 md:p-28 grid grid-cols-1 md:grid-cols-2 gap-10 font-inter">
      {/* Contact text */}
      <div className=" flex flex-col gap-10 items-start">
        {/* Contact heading */}
        <h1 className="text-6xl font-semibold text-primarygreen">Contact</h1>
        {/* Contact me text */}
        <p className=" text-grey">
          I genuinely look forward to hearing from you. I'm running this show
          solo, so your feedback, suggestions, and new ideas mean the world to
          me. Don't hesitate to reach out—whether it's a project idea, a
          potential collaboration, or just something you're excited about.{" "}
          <br />
          I'm all ears and ready to listen!
        </p>
        <p className=" text-grey">
          You can also directly email me on saikat.rog@gmail.com.
          <br />I reply to this form within 2-3 days.
        </p>
        {/* Email me button */}
        <button
          className=" bg-primarygreen w-32 h-11 text-white"
          onClick={handleEmailClick}
        >
          Email me
        </button>
      </div>
      {/* Contact form */}
      <div className=" flex flex-col items-center">
        <form className="max-w-lg w-full bg-lightdark rounded-sm shadow-lg p-8 mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark text-grey"
              onChange={handleFormInput}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark text-grey"
              onChange={handleFormInput}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark text-grey"
              onChange={handleFormInput}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primarygreen text-white py-2 px-4 rounded-sm hover:bg-opacity-80 transition duration-300"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
