import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) =>
      prevLanguage === "English" ? "हिन्दी" : "English"
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            School
          </span>
        </NavLink>

        {/* Language Switch */}
        <div className="flex items-center">
          <span
            onClick={toggleLanguage}
            className={`border border-gray-500 px-2 py-1 rounded cursor-pointer ${
              currentLanguage === "English" ? "bg-white text-black" : ""
            }`}
          >
            English
          </span>
          <span
            onClick={toggleLanguage}
            className={`border border-gray-500 px-2 py-1 rounded cursor-pointer ${
              currentLanguage === "हिन्दी" ? "bg-white text-black" : ""
            }`}
          >
            हिन्दी
          </span>
        </div>

        {/* Responsive Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Dropdown Menu for Mobile Screens */}
        {isMenuOpen && (
          <div className="md:hidden w-full">
            <div className="flex flex-col items-center space-y-4 bg-black text-white p-4">
              <NavLink to="/" className="hover:text-blue-500 mt-4">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-blue-500 mt-4">
                About
              </NavLink>
              <NavLink
                to="/inspiring-students"
                className="hover:text-blue-500 mt-4"
              >
                Inspiring Students
              </NavLink>
              <NavLink
                to="/inspiring-schools"
                className="hover:text-blue-500 mt-4"
              >
                The Academics
              </NavLink>
              <NavLink to="/contact-us">
                <button className="bg-black text-white px-4 py-2 rounded-full border border-white">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
        )}

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex md:w-auto space-x-8 justify-center">
          <div className="mt-2 flex justify-center space-x-4">
            <NavLink to="/" className="hover:text-blue-500">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-500">
              About
            </NavLink>
            <NavLink to="/inspiring-students" className="hover:text-blue-500">
              Inspiring Students
            </NavLink>
            <NavLink to="/inspiring-schools" className="hover:text-blue-500">
              The Academics
            </NavLink>
          </div>
          <NavLink to="/contact-us" >
            <button className="bg-black text-white px-4 py-2 rounded-full border border-white">
              Contact Us
            </button>
          </NavLink>  
        </div>
      </div>
    </nav>
  );
};
