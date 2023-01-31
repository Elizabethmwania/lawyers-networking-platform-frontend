import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "./Data";
import Chip from "./Chip/Chip";
import EmptyList from "./EmptyList/EmptyList";
import { Link } from "react-router-dom";
import img from '../../images/blog/recent-blog.png';
import '../../style/Landing.css';
import '../Blogs/AllBlogs.css'

const AllBlogStyle = {
  blogWrap: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  blogGoBack: {
    textDecoration: 'none',
    fontSize: '0.8rem',
    color: '#a9a9a9',
    fontWeight: 500,
    marginBottom: '2rem',
    display: 'block',
  },
  bloWrapHeader: {
    textAlign: 'center',
  },
  blogDate: {
    fontSize: '0.8rem',
    color: '#a9a9a9',
    fontWeight: 500,
  },
  blogSubCategory: {
    display: 'flex',
    justifyContent: 'center'
  },
  blogHeader:{
    textAlign:'center'
  },
  blogDesc: {
    padding: '1rem',
    marginTop: '1.5rem',
  }

};

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
    <Link className='blogGoBack' style={AllBlogStyle.blogGoBack} to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
    </Link>
      {blog ? (
        <div className='blogWrap' style={AllBlogStyle.blogWrap}>
          <header className="blogHeader">
            <p className='blogDate' style={AllBlogStyle.blogDate} >Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blogSubCategory' style={AllBlogStyle.blogSubCategory}  >
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <div style={{margin:'1rem'}} >
                  <Chip label={category} />
                  </div>
                </div>
              ))}
            </div>
          </header>
          <img src={img} alt='cover' />
          <p className='blogDesc' style={AllBlogStyle.blogDesc} >{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
