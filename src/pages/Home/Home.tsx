import React from "react";
import DOMPurify from "dompurify";

const dummyBlogContent = `
  <h2>Introduction</h2><p>C++ is a powerful and versatile programming language that has been a staple in the programming to the best of the programmer where they can find the best of doing in the software development landscape for decades. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. Developed as an extension of the C programming language, C++ (pronounced "C plus plus") introduces object-oriented programming features, providing developers with both low-level memory manipulation capabilities and high-level abstractions. In this brief blog post, we'll take a closer look at some key aspects of C++.</p><h2>1. <span style="color: inherit;">Object-Oriented Paradigm</span></h2><p>One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. In C++, you can use classes and objects to model real-world entities, making the language suitable for a wide range of applications. This is the best thing to do when we want to play this game of cricket I really enjoyed playing the game where I am working on the programming language ralated to computer scienec The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.</p>
`;

export const Home: React.FC = () => {
  const cleanHTML = DOMPurify.sanitize(dummyBlogContent, {
    USE_PROFILES: { html: true },
  });

  return (
    <>
      <div className="container mx-auto px-2 max-w-4xl">
        <div className="text-center flex flex-col items-start mt-8">
          <h1 className="text-5xl font-extrabold mb-4">Article on C++</h1>
          <p className="text-lg text-gray-500 mb-4">C++ is useful for CP</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">Programming</span>
            <span>14 May 2023</span>
          </div>
        </div>
        <img
          src="https://cryptch.tech/images/courses/cplusplus.jpg"
          alt="Banner Image"
          className="block w-full max-h-96 object-cover mt-4"
        />
        <div className="flex justify-center min-h-screen m-4">
          {/* Left column for sticky social media links */}
          <div className="sticky top-0 p-4 bg-white h-screen overflow-y-auto">
            {/* Social media links with Font Awesome icons */}
            <div className="flex flex-col mb-4">
              <p className="mb-2">Share</p>
              <div className="flex flex-col space-y-2">
                {/* Adjusted styling for larger icons */}
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-lg"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-700 text-lg"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-700 text-lg"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-lg"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Main content area on the right */}
          <div className="flex flex-col flex-grow items-center">
            <div
              className="prose items-center justify-center flex-grow"
              dangerouslySetInnerHTML={{ __html: cleanHTML }}
            />
          </div>
        </div>
      </div>

      {/* New container for "You May Also Like" text and horizontal line */}
      <div className="container mx-auto px-2 mt-8">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">You May Also Like</h2>
          <hr className="border-t-2 border-gray-300 my-2" />
        </div>

        <div className="flex justify-center">
          {/* Box 1 */}
          <div className="bg-gray-200 p-4 mx-4 my-8 h-32">
            <h3 className="text-lg font-semibold">Related Blog 1</h3>
            <p>Content of the related blog 1...</p>
          </div>

          {/* Box 2 */}
          <div className="bg-gray-200 p-4 mx-4 my-8 h-32">
            <h3 className="text-lg font-semibold">Related Blog 2</h3>
            <p>Content of the related blog 2...</p>
          </div>

          {/* Box 3 */}
          <div className="bg-gray-200 p-4 mx-4 my-8 h-32">
            <h3 className="text-lg font-semibold">Related Blog 3</h3>
            <p>Content of the related blog 3...</p>
          </div>
        </div>
      </div>
    </>
  );
};
