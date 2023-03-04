import React, { useEffect, useState } from "react";
import Chip from "../../Chip/Chip";
import { Link } from "react-router-dom";
// import "./BlogItem.css";
import img from "../../../../images/blog/blog1.png";

//display each blog item
export default function BlogItem() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        //set slow loading effect or pagination
        "/api/publication/"
      );
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);
  return (
    <>
      {blogs.map((blog) => (
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
    </>
  );
}
