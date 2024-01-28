import React from "react";

const blogData = [
  {
    title: "Student Blog 1",
    content: "This is the content of Student Blog 1.",
    date: "January 1, 2022",
    imageUrl:
      "https://images.prismic.io/cred/2f984c4e-6a67-4961-9857-78a0f459078b_indias-thrasios-will-reshape-brands.jpg?auto=compress,format&rect=0,0,1860,1080&w=620&h=360", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 2",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/ff244435-41a5-47cc-bd5c-6f509c60cc14_amazon-has-spacial-dreams.jpg?auto=compress,format&rect=0,0,1860,1080&w=620&h=360", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 3",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/ef0bc358-962f-4ae9-962c-2ad839a053f8_twitter%27s-getting-musky.jpg?auto=compress,format&rect=0,0,1860,1080&w=620&h=360", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 4",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/e6b91aa6-0025-478f-8c24-16e9b28715d4_header+%284%29.jpg?auto=compress,format&rect=0,0,413,239&w=620&h=359", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 5",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/92d1f3c2-64d9-43cb-8b15-df1de26e927d_bitcoin-leads-its-flock-past-%242-trillion.jpg?auto=compress,format&rect=0,0,1860,1080&w=620&h=360", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 6",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/10236f8b-c614-4959-86ad-acb74733010d_image+%289%29.png?auto=compress,format&rect=0,0,769,433&w=620&h=349", // Replace with actual image URL
    category: "Technology",
  },
  {
    title: "Student Blog 7",
    content: "This is the content of Student Blog 2.",
    date: "February 15, 2022",
    imageUrl:
      "https://images.prismic.io/cred/3596dcf5-8730-4575-b401-0498075aace2_header+%285%29.jpg?auto=compress,format&rect=0,0,413,239&w=620&h=359", // Replace with actual image URL
    category: "Technology",
  },
];

export const InspiringStudent: React.FC = () => {
  const [featuredBlog, ...remainingBlogs] = blogData;
  return (
    <div className="container mx-auto mt-8 px-2 max-w-4xl mb-6">
      <div className="text-4xl font-bold mb-4">Student Articles</div>
      <p className="text-gray-600 mb-8">
        The journal of credit card usage comprises of articles related to credit
        scores, banking & financial services, and the combination of exciting
        rewards.
      </p>

      {/* Featured Blog */}
      <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 p-4 border border-gray-300 rounded-lg grid grid-cols-1">
        <div className="flex">
          <img
            src={featuredBlog.imageUrl}
            alt={`Banner for ${featuredBlog.title}`}
            className="w-1/2 h-48 object-cover rounded-t-lg mb-2"
          />
          <div className="w-1/2 p-4">
            <p className="text-sm text-gray-500 mb-2">
              {featuredBlog.category}
            </p>
            <h2 className="text-lg font-bold mb-2">{featuredBlog.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{featuredBlog.date}</p>
          </div>
        </div>
      </div>

      {/* Remaining Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {remainingBlogs.map((blog, index) => (
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
