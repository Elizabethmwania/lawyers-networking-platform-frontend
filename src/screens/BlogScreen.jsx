import React from "react";
import '../style/Landing.css';
import BlogHeader from "../components/Blogs/BlogHeader";
import TopNavbar from "../components/Nav/TopNavbar";
import BlogIndex from "../components/Blogs/BlogIndex";
import { Link } from "react-router-dom";
import Footer from "../components/Sections/Footer";
import Backdrop from "../components/Elements/Backdrop";
const BlogScreen = () => {
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
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Life <span className="itemNumber">(2)</span>
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Education<span className="itemNumber"> (5)</span>
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Crime<span className="itemNumber"> (2)</span>
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Marriage <span className="itemNumber"> (10)</span>
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Counties<span className="itemNumber"> (5)</span>
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link className="link" to="/">
                  Cinema<span className="itemNumber"> (15)</span>
                </Link>
              </li>
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
