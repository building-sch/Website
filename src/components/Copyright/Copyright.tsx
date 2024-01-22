import React, { useState } from "react";

interface CopyrightSectionProps {}

export const Copyright: React.FC<CopyrightSectionProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) =>
      prevLanguage === "English" ? "हिन्दी" : "English"
    );
  };
  return (
    <div className="bg-blue-900 text-white p-4">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        {/* Copyright Section */}
        <div>
          <p>&copy; School 2024</p>
        </div>

        {/* Made in India Section */}
        <div>
          <p>Crafted with ❤️ India</p>
        </div>

        {/* Language Switch Section */}
        <div className="flex items-center">
          <span
            onClick={toggleLanguage}
            className={`border border-gray-500 px-2 py-1 rounded cursor-pointer ${
              currentLanguage === "English" ? "bg-sky-500 text-white" : ""
            }`}
          >
            English
          </span>
          <span
            onClick={toggleLanguage}
            className={`border border-gray-500 px-2 py-1 rounded cursor-pointer ${
              currentLanguage === "हिन्दी" ? "bg-sky-500 text-white" : ""
            }`}
          >
            हिन्दी
          </span>
        </div>
      </div>
    </div>
  );
};
