import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Home: React.FC = () => {
  const images = [
    "https://images.prismic.io/cred/e6b91aa6-0025-478f-8c24-16e9b28715d4_header+%284%29.jpg?auto=compress,format&rect=0,0,413,239&w=620&h=359",
    "https://www.dpsjhakri.com/images/dps_logo1.png",
    "https://placekitten.com/301/200",
  ];

  const slideTitles = ["Slide 1 Title", "Slide 2 Title", "Slide 3 Title"];
  const slideDescriptions = [
    "Description for Slide 1 goes here.",
    "Description for Slide 2 goes here.",
    "Description for Slide 3 goes here.",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const switchImage = (index: any) => {
    setCurrentImage(index);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="relative overflow-hidden h-96 lg:h-1/2">
        <img
          src={images[currentImage]}
          alt={`Banner Image ${currentImage + 1}`}
          className="w-full h-96 lg:h-128 object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-end text-black p-4 pl-8">
          <h1 className="text-2xl font-bold mb-2">{slideTitles[currentImage]}</h1>
          <p className="text-sm font-bold mb-2">{truncateText(slideDescriptions[currentImage], 150)}</p>
        </div>


        {/* Previous Button */}
        <button
          onClick={() =>
            switchImage((currentImage - 1 + images.length) % images.length)
          }
          className="absolute inset-y-0 left-0 flex items-center bg-gray-800 text-white p-2 rounded-r-md cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => switchImage((currentImage + 1) % images.length)}
          className="absolute inset-y-0 right-0 flex items-center bg-gray-800 text-white p-2 rounded-l-md cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {/* Mobile overlay for small screens */}
        <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Dots for each image */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 pb-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => switchImage(index)}
              className={`w-3 h-3 rounded-full bg-gray-300 cursor-pointer ${
                index === currentImage ? "bg-blue-500" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-8 mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">In Spotlight</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-3 rounded-md shadow-md lg:h-80 md:h-80 sm:h-64">
            <img
              src="https://images.prismic.io/cred/e6b91aa6-0025-478f-8c24-16e9b28715d4_header+%284%29.jpg?auto=compress,format&rect=0,0,413,239&w=620&h=359"
              alt="Spotlight 1"
              className="w-full h-32 object-cover object-top mb-2 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">
              The Importance Of Education 1
            </h3>
            <p className="text-sm text-gray-600">
              {truncateText(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                200
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-3 rounded-md shadow-md lg:h-80 md:h-80 sm:h-64">
            <img
              src="https://placekitten.com/300/201"
              alt="Spotlight 2"
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">
              The Importance Of Education 2
            </h3>
            <p className="text-sm text-gray-600">
              {truncateText(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                200
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-3 rounded-md shadow-md lg:h-80 md:h-80 sm:h-64">
            <img
              src="https://placekitten.com/301/200"
              alt="Spotlight 3"
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">
              The Importance Of Education 3
            </h3>
            <p className="text-sm text-gray-600">
              {truncateText(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                200
              )}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-3 rounded-md shadow-md lg:h-80 md:h-80 sm:h-64">
            <img
              src="https://placekitten.com/301/201"
              alt="Spotlight 4"
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">
              The Importance Of Education 4
            </h3>
            <p className="text-sm text-gray-600">
              {truncateText(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                200
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {/* Newsletter Section */}
          <div className="bg-white p-5 rounded-md shadow-md flex-grow flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to receive the latest updates and
                news.
              </p>
              <form className="flex items-center">
                {/* Email Input */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-l-md w-full"
                  placeholder="Your email address"
                  required
                />

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Green Box */}
          <div className="bg-green-500 p-5 rounded-md shadow-md text-white ml-0 mt-4 md:ml-4 md:mt-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Join our community</h2>
            <i className="fab fa-whatsapp fa-3x mb-4"></i>
          </div>
        </div>

        {/* New Section */}
        <h2 className="text-2xl font-bold text-center mb-4 mt-8">
          The Academics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12 mt-8">
          <div className="bg-white p-3 rounded-md shadow-md flex lg:h-44 md:h-80 sm:h-64">
            <div className="flex-1 ml-4 w-2/3">
              <h3 className="text-lg font-bold mb-2">
                Left Side Text Header 1
              </h3>
              <p className="text-sm text-gray-600">
                Small writeup for Box 1. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Date: January 1, 2022
              </p>
            </div>
            <img
              src="https://placekitten.com/300/200"
              alt="Box 1"
              className="w-1/3 h-full object-cover rounded-md"
            />
          </div>

          <div className="bg-white p-3 rounded-md shadow-md flex lg:h-44 md:h-80 sm:h-64">
            <div className="flex-1 ml-4 w-2/3">
              <h3 className="text-lg font-bold mb-2">
                Left Side Text Header 2
              </h3>
              <p className="text-sm text-gray-600">
                Small writeup for Box 1. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Date: January 1, 2022
              </p>
            </div>
            <img
              src="https://placekitten.com/300/200"
              alt="Box 1"
              className="w-1/3 h-full object-cover rounded-md"
            />
          </div>

          <div className="bg-white p-3 rounded-md shadow-md flex lg:h-44 md:h-80 sm:h-64">
            <div className="flex-1 ml-4 w-2/3">
              <h3 className="text-lg font-bold mb-2">
                Left Side Text Header 3
              </h3>
              <p className="text-sm text-gray-600">
                Small writeup for Box 1. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Date: January 1, 2022
              </p>
            </div>
            <img
              src="https://placekitten.com/300/200"
              alt="Box 1"
              className="w-1/3 h-full object-cover rounded-md"
            />
          </div>

          <div className="bg-white p-3 rounded-md shadow-md flex lg:h-44 md:h-80 sm:h-64">
            <div className="flex-1 ml-4 w-2/3">
              <h3 className="text-lg font-bold mb-2">
                Left Side Text Header 4
              </h3>
              <p className="text-sm text-gray-600">
                Small writeup for Box 1. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Date: January 1, 2022
              </p>
            </div>
            <img
              src="https://placekitten.com/300/200"
              alt="Box 1"
              className="w-1/3 h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Our Partners Section */}
        <div className="text-center mt-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <div className="flex justify-center space-x-4">
            {/* Image 1 */}
            <img
              src="https://www.dpsjhakri.com/images/dps_logo1.png"
              alt="Partner 1"
              className="w-1/3 object-contain max-h-56"
            />
            {/* Image 2 */}
            <img
              src="https://www.dpsjhakri.com/images/dps_logo1.png"
              alt="Partner 2"
              className="w-1/3 object-contain max-h-56"
            />
            {/* Image 3 */}
            <img
              src="https://www.dpsjhakri.com/images/dps_logo1.png"
              alt="Partner 3"
              className="w-1/3 object-contain max-h-56"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white p-8">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">
            Support the biggest positive movement
          </h2>
          <p className="text-gray-300 text-center mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex items-center flex-col w-full md:flex-row">
            {/* Image Box */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img
                src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg" // Adjust the image size here
                alt="Support Image"
                className="w-96 h-auto object-cover rounded-md"
              />
            </div>
            {/* Button Box */}
            <div className="flex-grow flex items-center justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                Contribute for students future
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
