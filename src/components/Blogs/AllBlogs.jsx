import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogHeader from "./BlogHeader";
import Navbar from '../Nav/TopNavbar';
import Footer from '../Sections/Footer';
import Chip from "./Chip/Chip";
import EmptyList from "./EmptyList/EmptyList";
import { Link } from "react-router-dom";
import img from '../../images/blog/recent-blog.png';
import Blog from "../Sections/Blog";
import BlogCategories from "./BlogCategories";
import { Fade } from "react-awesome-reveal";

const AllBlogStyle = {

  blogWrap: {
    // width: '700px',
    // flex:9
    
  },
  blogGoBack: {
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#a9a9a9',
    fontWeight: 500,
    marginBottom: '2rem',
    display: 'block',
  },
  bloWrapHeader: {
    textAlign: 'center',
  },
  blogDates: {
    paddingTop: '0.8rem',
    fontSize: '0.8rem',
    color: '#a9a9a9',
    fontWeight: 500,
  },
  blogHeaders:{
    float:'left',
    position:'inherit',
    marginTop:'1.5rem'
    

  },
  blogDesc: {
    padding: '0rem',
    marginTop: '1.5rem',
  },
  blogImage:{
    marginTop:'0rem',
    width:'670px'
  }

};

export default function AllBlogs() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);

    useEffect (() => {
      const fetchBlogs = async () => {
        const response = await fetch (
          "http://127.0.0.1:8000/publication/"
        );
        const data = await response.json();
        let blogs = data.find((blogs) => blogs.id === parseInt(id));
        setBlogs(blogs);
      };
  
      fetchBlogs();
    }, []);
  
  return (
    <>
    <Navbar/>
    <BlogHeader />
    
      {blogs ? (
        <div className="allBlogs">
          <div className="blogGrid">
            <div className="flex">
              <div className='blogWrap' style={AllBlogStyle.blogWrap}>
                <Fade>
                <header className="blogHeaders" style={AllBlogStyle.blogHeaders}>
                <h2>{blogs.Title}</h2>
                </header>
                  <img src={img} alt='cover'className="blogImage" style={AllBlogStyle.blogImage} />
                    <div className="blogflexSpaceCenter">
                        <Chip label={blogs.Category} />
                        <span>
                          <p className='blogDates' style={AllBlogStyle.blogDates} >Published {blogs.DatePublished}</p>
                        </span>
                    </div>
                  <p className='font13' style={AllBlogStyle.blogDesc} >{blogs.Description}</p>
                <Link className='blogGoBack' style={AllBlogStyle.blogGoBack} to='/blog'>
                  <span> &#8592;</span> <span>Go Back</span>
                </Link>
                </Fade>
              </div>
              {/* <div className="blogs-container">
                <BlogCategories/>
              </div> */}
            </div> 
          </div>
        <Blog/>
      </div>  
      ) : (
        <EmptyList />
      )}
      <Footer/>
    </>
  );
}
