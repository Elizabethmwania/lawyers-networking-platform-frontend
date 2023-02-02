import React from "react";
import "./BlogScreen.css";
import { blogList } from "../components/Blogs/Data";
import BlogHeader from "../components/Blogs/BlogHeader";
import TopNavbar from "../components/Nav/TopNavbar";
import BlogIndex from "../components/Blogs/BlogIndex";

const BlogScreen = () => {
  return (
    <>
      <TopNavbar />
      <BlogHeader />
      <div className="blog-container">
        <div className="blog-flex">
          <BlogIndex />
        </div>
        <div className="sidebar-flex">
          <div className="category-card">
            <div className="top">Categories</div>
            <hr style={{ height: "1px", width: "100%" }} />
            <div className="bottom">
              <div className="categories">
                <span>crime</span>
                <span>10</span>
              </div>
              <div className="categories">
                <span>crime</span>
                <span>10</span>
              </div>
              <div className="categories">
                <span>crime</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AllBlogs/> */}
      {/* <Blogs/> */}
    </>
  );
};

export default BlogScreen;
