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
const AllBlogStyle = {
  blogGrid:{
    // display:'inline-grid',

  },
  blogFlexContainer:{
    display:'flex',
    justifyContent:'center',
    // margin:'50px'
  },
  // mostReviewedContainer:{
  //   flex:'3',
  //   paddingLeft: '50px',
  // },
  blogWrap: {
    width: '700px',
    flex:'9'
    
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
    width:'700px'
  }

};

export default function AllBlogs() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect (() => {
      const fetchBlogs = async () => {
        const response = await fetch (
          "http://127.0.0.1:8000/publication/"
          // `http://127.0.0.1:8000/publication/${id}`
        );
        const data = await response.json();
        let blogs = data.find((blogs) => blogs.id === parseInt(id));
        setBlogs(blogs);
        setCategories(data);
      };
  
      fetchBlogs();
    }, []);
  
  return (
    <>
    <Navbar/>
    <BlogHeader />
    
      {blogs ? (
        <div className="allBlogs">
         <div className="blogGrid" style={AllBlogStyle.blogGrid}>
            <div className="blogFlexContainer" style={AllBlogStyle.blogFlexContainer}>
              <div className='blogWrap' style={AllBlogStyle.blogWrap}>
                <header className="blogHeaders" style={AllBlogStyle.blogHeaders}>
                <h2>{blogs.Title}</h2>
                </header>
                <img src={img} alt='cover'className="blogImage" style={AllBlogStyle.blogImage} />
                <div style={{margin:'1rem', display:'flex', justifyContent:'space-between'}}>
                          <Chip label={blogs.Category} />
                          <span>
                          <p className='blogDates' style={AllBlogStyle.blogDates} >Published {blogs.DatePublished}</p>
                        </span>
                </div>
                <p className='font13' style={AllBlogStyle.blogDesc} >{blogs.Description}</p>
                <Link className='blogGoBack' style={AllBlogStyle.blogGoBack} to='/blog'>
                <span> &#8592;</span> <span>Go Back</span>
                </Link>
              </div>

              {/* <div className="mostReviewedContainer" style={AllBlogStyle.mostReviewedContainer}> */}
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
              {/* </div> */}
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
