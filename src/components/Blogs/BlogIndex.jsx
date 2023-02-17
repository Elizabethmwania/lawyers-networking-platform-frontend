import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import EmptyList from "./EmptyList/EmptyList";
// import BlogList from './BlogList/BlogList';
import Chip from "./Chip/Chip";
import { Link, useParams } from "react-router-dom";
import "../Blogs/BlogList/BlogItem/BlogItem.css";
import img from "../../images/blog/blog1.png";
import axios from "axios";

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/publication/publication/search/?q=${searchQuery}`
    );
    setData(result.data);
  };

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };
  // filter based on category
  useEffect(() => {
    fetchCategoryData();
  }, [selectedCategory]);

  const fetchCategoryData = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/publication/publications/${selectedCategory}`
    );
    setData(result.data);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <input
        value={searchQuery}
        onChange={handleSearchInput}
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ width: "80%" }}
      />
      <br />

      {/* Blog List and Empty View   */}
      {/* {!blogs.length ? <EmptyList /> : <BlogList blogs={allBlogs} />} */}
      <div className="row">
        <div className="col-md-9">
          {!data.length ? (
            <EmptyList />
          ) : (
            <div className="PublicationContainer">
              {data.map((blog) => (
                <div className="blogItem-wrap">
                  <img className="blogItem-cover" src={img} alt="cover" />
                  <h5 className="font13 extraBold">
                    {blog.Title}
                    <span className="tag font11">{blog.DatePublished}</span>
                  </h5>
                  <p className="blogItem-desc">{blog.Description}</p>
                  <footer>
                    <div className="blogItem-author">
                      <Chip label={blog.Category} />
                    </div>
                    <Link
                      key={blog.id}
                      className="blogItem-link"
                      to={`/blog/${blog.id}`}
                    >
                      Read More ➝
                    </Link>
                  </footer>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category */}
        <div className="col-md-3">
          <div className="blogs-sidebar">
            <div className="blogSidebarItem">
              <span className="blogSidebarTitle">CATEGORIES</span>
              <ul className="blogSidebarList">
                <li onClick={() => handleCategorySelect("All/")}>
                  All Categories
                </li>
                <li onClick={() => handleCategorySelect("Criminal Law")}>
                  Criminal Law
                </li>
                <li onClick={() => handleCategorySelect("Civil Law")}>
                  Civil Law
                </li>
                <li onClick={() => handleCategorySelect("Family Law")}>
                  Family Law
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End of category */}
      </div>
    </div>
  );
}
