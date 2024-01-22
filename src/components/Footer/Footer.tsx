import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-700 text-white p-8">
      <div className="flex justify-between max-w-screen-xl mx-auto space-x-10">
        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="list-none p-0">
            <li>Home</li>
            <li>About</li>
            <li>Inspiring Students</li>
            <li>The Academics</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="list-none p-0">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            <a href="#" className="text-blue-500 hover:text-blue-700 text-xl">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-purple-700 text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-700 text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="text-red-500 hover:text-red-700 text-xl">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
