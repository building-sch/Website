import React from "react";
// import DOMPurify from "dompurify";

// const dummyBlogContent = `
//   <h2>Introduction</h2><p>C++ is a powerful and versatile programming language that has been a staple in the programming to the best of the programmer where they can find the best of doing in the software development landscape for decades. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. Developed as an extension of the C programming language, C++ (pronounced "C plus plus") introduces object-oriented programming features, providing developers with both low-level memory manipulation capabilities and high-level abstractions. In this brief blog post, we'll take a closer look at some key aspects of C++.</p><h2>1. <span style="color: inherit;">Object-Oriented Paradigm</span></h2><p>One of the defining features of C++ is its support for object-oriented programming (OOP). This paradigm allows developers to structure their code using objects, which are instances of classes. Classes encapsulate data and behavior, promoting code organization, reusability, and maintainability. In C++, you can use classes and objects to model real-world entities, making the language suitable for a wide range of applications. This is the best thing to do when we want to play this game of cricket I really enjoyed playing the game where I am working on the programming language ralated to computer scienec The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below. The conversion of a Byte Array to Hex String involves changing an array of byte datatype to its hexadecimal value in the form of a string. There are numerous approaches to do the same; a few of them are listed below.</p>
// `;

export const Home: React.FC = () => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
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
            The Importance Of Education
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
            The Importance Of Education
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
            The Importance Of Education
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
            The Importance Of Education
          </h3>
          <p className="text-sm text-gray-600">
            {truncateText(
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              200
            )}
          </p>
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
  );
};
