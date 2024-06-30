import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const name = "Saikat";
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null); // State to track active nav item

  const navItems = [
    { id: 1, text: "Home", to: "/" },
    { id: 3, text: "Projects", to: "/projects" },
    { id: 4, text: "About", to: "/about" },
    { id: 5, text: "Blog", to: "/blog" },
    { id: 6, text: "Contact", to: "/contact" },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleNavItemClick = (id) => {
    setActiveNavItem(id); // Set active nav item ID
    setNavOpen(false); // Close the navbar for mobile view
  };

  return (
    <div className="fixed w-full min-h-16 bg-deepdark text-white font-inter z-50">
      <div className="flex justify-between items-center pl-6 pr-6 md:pl-28 md:pr-28 py-4">
        <div className="text-2xl font-semibold">
          {name}<span className="text-primarygreen">.</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${
                item.id === activeNavItem ? "text-primarygreen font-semibold" : "" // Conditional class based on activeNavItem state
              } ${
                item.id === 6 ? "border border-primary p-2 border-primarygreen" : "border-none p-2"
              }`}
              onClick={() => handleNavItemClick(item.id)} // Call handleNavItemClick on click
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      {navOpen && (
        <div className="md:hidden bg-deepdark">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.id === activeNavItem ? "text-primarygreen" : "" // Conditional class based on activeNavItem state
                } ${
                  item.id === 6 ? "border border-primary p-2 border-primarygreen" : "border-none p-2"
                }`}
                onClick={() => handleNavItemClick(item.id)} // Call handleNavItemClick on click
              >
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
