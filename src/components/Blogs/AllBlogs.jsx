import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "./Data";
import BlogHeader from "./BlogHeader";
import Navbar from '../Nav/TopNavbar';
import Footer from '../Sections/Footer';
import Chip from "./Chip/Chip";
import EmptyList from "./EmptyList/EmptyList";
import { Link } from "react-router-dom";
import img from '../../images/blog/recent-blog.png';
import RecentBlogs from "./RecentBlogs";
const AllBlogStyle = {
  blogGrid:{
    // display:'inline-grid',

  },
  blogFlexContainer:{
    display:'flex',
    justifyContent:'center',
    // margin:'50px'
  },
  mostReviewedContainer:{
    flex:'3',
    paddingLeft: '50px',
  },
  blogWrap: {
    maxWidth: '700px',
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
  blogSubCategory: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.8rem',
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
    marginTop:'4rem',
    maxWidth:'700px'
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
    <Navbar/>
    <BlogHeader />
    
      {blog ? (
      <div className="blogGrid" style={AllBlogStyle.blogGrid}>
      <div className="blogFlexContainer" style={AllBlogStyle.blogFlexContainer}>
        <div className='blogWrap' style={AllBlogStyle.blogWrap}>
          <header className="blogHeaders" style={AllBlogStyle.blogHeaders}>
           <h2>{blog.title}</h2>
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
          <img src={img} alt='cover'className="blogImage" style={AllBlogStyle.blogImage} />
          <p className='blogDates' style={AllBlogStyle.blogDates} >Published {blog.createdAt}</p>
          <p className='blogDesc' style={AllBlogStyle.blogDesc} >{blog.description}</p>
          <Link className='blogGoBack' style={AllBlogStyle.blogGoBack} to='/blog'>
          <span> &#8592;</span> <span>Go Back</span>
          </Link>
        </div>
        <div className="mostReviewedContainer" style={AllBlogStyle.mostReviewedContainer}>
          {/* category side bar */}
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
      </div> 
      <RecentBlogs/>
      </div>  
      ) : (
        <EmptyList />
      )}
      <Footer/>
    </>
  );
}
