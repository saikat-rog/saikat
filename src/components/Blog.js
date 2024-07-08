import React from 'react';
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deepdark text-white p-4">
      <Helmet><title>Blogs</title></Helmet>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-primarygreen">
        🚀 New Blogs Dropping Soon! Stay Tuned 📚✨
      </h1>
    </div>
  );
}

export default Blog;
