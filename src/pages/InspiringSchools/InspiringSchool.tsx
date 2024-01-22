import React from "react";

const blogData = [
  {
    title: "Blog 1",
    content: "This is the content of Blog 1.",
    date: "January 1, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Blog 2",
    content: "This is the content of Blog 2.",
    date: "February 15, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Blog 3",
    content: "This is the content of Blog 2.",
    date: "February 15, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Blog 4",
    content: "This is the content of Blog 2.",
    date: "February 15, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Blog 5",
    content: "This is the content of Blog 2.",
    date: "February 15, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Blog 6",
    content: "This is the content of Blog 2.",
    date: "February 15, 2022",
    imageUrl: "https://cryptch.tech/images/courses/cplusplus.jpg", // Replace with actual image URL
    category: "Technology",
  },
];

export const InspiringSchool: React.FC = () => {
  return (
    <div className="container mx-auto px-2 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {blogData.map((blog, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg">
            <img
              src={blog.imageUrl}
              alt={`Banner for ${blog.title}`}
              className="w-full h-48 object-cover rounded-t-lg mb-2"
            />
            <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
