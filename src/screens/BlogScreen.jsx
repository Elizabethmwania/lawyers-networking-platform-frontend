import React, { useEffect, useState } from "react";
import '../style/Landing.css';
import BlogHeader from "../components/Blogs/BlogHeader";
import TopNavbar from "../components/Nav/TopNavbar";
import BlogIndex from "../components/Blogs/BlogIndex";
import { Link } from "react-router-dom";
import Footer from "../components/Sections/Footer";
import Backdrop from "../components/Elements/Backdrop";
const BlogScreen = () => {
  const [categories, setCategories] = useState([]);
  useEffect (() => {
    const fetchCategories = async () => {
      const response = await fetch (
        //each category with blogs
        "http://127.0.0.1:8000/publication/"
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <>
      <TopNavbar />
      <BlogHeader />
      <div className="blogs-container">
        <div className="blogs-flex">
          <BlogIndex />
        </div>
        <div className="blogs-sidebar">
          <div className="blogSidebarItem">
            <span className="blogSidebarTitle">CATEGORIES</span>
            <ul className="blogSidebarList">
            {categories.map((category) =>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  {category.Category}
                  <span className="itemNumber">(2)</span>
                </Link>
              </li>
              )}
            </ul>
            </div>
          </div>
      </div>
      <Backdrop/>
      <Footer/>
    </>
  );
};

export default BlogScreen;
