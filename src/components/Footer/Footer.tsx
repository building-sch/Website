import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 mt-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
        {/* First Part - Three Links */}
        <div className="flex flex-col space-y-2">
          <Link to="/link1" className="text-white hover:text-blue-700">
            Home
          </Link>
          <Link to="/link2" className="text-white hover:text-blue-700">
            About
          </Link>
          <Link to="/link3" className="text-white hover:text-blue-700">
            Ask Us
          </Link>
        </div>

        {/* Second Part - Three More Links */}
        <div className="flex flex-col space-y-2">
          <Link to="/link4" className="text-white hover:text-blue-700">
            Inspiring Students
          </Link>
          <Link to="/link5" className="text-white hover:text-blue-700">
            Inspiring Schools
          </Link>
          <Link to="/link6" className="text-white hover:text-blue-700">
            Contact
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <Link to="/link1" className="text-white hover:text-blue-700">
            Advertise With Us
          </Link>
          <Link to="/link2" className="text-white hover:text-blue-700">
            Partner With Us
          </Link>
          <Link to="/link3" className="text-white hover:text-blue-700">
            Work With Us
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <Link to="/link1" className="text-white hover:text-blue-700">
            Privacy Policy
          </Link>
          <Link to="/link2" className="text-white hover:text-blue-700">
            Terms Of Use
          </Link>
          <Link to="/link3" className="text-white hover:text-blue-700">
            Cookies Policy
          </Link>
        </div>

        {/* Third Part - Social Handles */}
        <div className="flex flex-col space-y-2">
          <span className="text-white">Follow Us</span>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-white hover:text-blue-700"></i>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-white hover:text-blue-700"></i>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-white hover:text-blue-700"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
