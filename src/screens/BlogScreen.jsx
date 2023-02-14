import React, { useEffect, useState } from "react";
import '../style/Landing.css';
import BlogHeader from "../components/Blogs/BlogHeader";
import TopNavbar from "../components/Nav/TopNavbar";
import BlogIndex from "../components/Blogs/BlogIndex";
import Footer from "../components/Sections/Footer";
import Backdrop from "../components/Elements/Backdrop";
import BlogCategories from "../components/Blogs/BlogCategories";

  const BlogScreen = () => {
  return (
    <>
      <TopNavbar />
      <BlogHeader />
      <div className="blogs-container">
        <div className="blogs-flex">
          <BlogIndex />
        </div>
        <BlogCategories/>
      </div>
      <Backdrop/>
      <Footer/>
    </>
  );
};

export default BlogScreen;
