import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "./Data";
import Chip from "./Chip/Chip";
import EmptyList from "./EmptyList/EmptyList";
import { Link } from "react-router-dom";
import img from '../../images/blog/recent-blog.png';
import '../../style/Landing.css'

export default function AllBlogs() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
        setBlog(blog);
        }
    }, []);
  return (
    <>
    <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
    </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={img} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
