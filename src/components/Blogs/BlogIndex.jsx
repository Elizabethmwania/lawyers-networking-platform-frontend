import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import EmptyList from "./EmptyList/EmptyList";
import Chip from "./Chip/Chip";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import img from "../../images/blog/blog1.png";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const result = await axios.get(
      `/api/publication/publication/search/?q=${searchQuery}`
    );
    setData(result.data);
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value.toLowerCase().trim());
  };
  
  // filter based on category
  useEffect(() => {
    fetchCategoryData();
  }, [selectedCategory]);

  const fetchCategoryData = async () => {
    const result = await axios.get(
      `/api/publication/publications/${selectedCategory}`
    );
    setData(result.data);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="searchForm">
      <input
        value={searchQuery}
        onChange={handleSearchInput}
        class="form-control"
        type="search"
        placeholder="Search Title"
        aria-label="Search"
        style={{ width: "76%"}}
      />
      <br />
      </div>
      <div className="blogs-container">
        <div className="blogs-flex">
          {!data.length ? (
            <EmptyList />
            
          ) : (
            <div className="PublicationContainer">
              {data.map((blog) => (
                <div className="blogItem-wrap">
                  <SingleBlog>
                  <Fade key={blog.id}  direction="up" cascade delay={blog.id * 200} duration={1000} fraction={0.1}>
                  <Link
                      key={blog.id}
                      className="blogItem-link"
                      to={`/blog/${blog.id}`}
                    >
                  <img className="blogItem-cover" src={img} alt="cover" />
                  </Link>
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
                  </Fade>
                  </SingleBlog>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category */}
        <div className="col-md-3 sticky-top">
          <div className="blogs-sidebar">
            <div className="blogSidebarItem">
              <span className="blogSidebarTitle">CATEGORIES</span>
              <ul className="blogSidebarList">
                <li className="font13 pointer" onClick={() => handleCategorySelect("All/")}>
                  All Categories
                </li>
                <li className="font13 pointer" onClick={() => handleCategorySelect("Criminal Law")}>
                  Criminal Law
                </li>
                <li className="font13 pointer" onClick={() => handleCategorySelect("Civil Law")}>
                  Civil Law
                </li>
                <li className="font13 pointer" onClick={() => handleCategorySelect("Family Law")}>
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


const SingleBlog = styled.div`
animation-duration: 1s;
animation-iteration-count: 1;
transform-origin: bottom;

:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}
`;