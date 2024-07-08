import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deepdark text-white p-10 md:pl-28 md:pr-28 md:pt-28 flex flex-col">
      <div className="flex flex-col w-full h-auto">
        {/* Feel free text and contact button */}
        <div className="flex flex-row justify-between w-full">
          <div className="text-2xl md:text-4xl font-semibold pb-5">
            Have any project in mind?
          </div>
          <Link to="/contact">
            <div className="bg-primarygreen text-white w-32 h-11 rounded-sm hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
              Contact me
            </div>
          </Link>
        </div>
        {/* Feel free to contact me! */}
        <div className="text-grey">Feel free to contact me!</div>
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full pt-16">
          {/* Name */}
          <div className="hidden md:block text-3xl md:text-5xl font-semibold">
            Saikat<span className="text-primarygreen">.</span>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {/* Information */}
            <div className="flex flex-col gap-2 text-grey">
              <h3 className="text-white">Information</h3>
              <h3>Email: saikat.rog@gmail.com</h3>
              <h3>Address: Kolkata, India</h3>
            </div>
            {/* Social Media */}
            <div className="flex flex-col gap-2 text-grey">
              <h3 className="text-white">Social Media</h3>
              <a href="https://github.com/saikat-rog" target="blank">Github</a>
              <a href="https://linkedin.com/in/thissaikat" target="blank">Linkedin</a>
            </div>
          </div>
        </div>
        {/* Copyright Information */}
        <div className="flex flex-row justify-between border-t-2 border-slate-800 pt-5 mt-5">
          <div>
            Developed by <span className="text-primarygreen">Saikat</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Saikat Das. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
