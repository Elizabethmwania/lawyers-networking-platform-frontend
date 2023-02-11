import React, { useEffect, useState } from 'react'
import Chip from '../../Chip/Chip'
import { Link, useParams } from 'react-router-dom'
import './BlogItem.css'
import img from '../../../../images/blog/blog1.png';

// const BlogItemStyle = {
//   blogItemWrap: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   blogItemCover: {
//     width: '100%',
//     height: '250px',
//     objectFit: 'cover',
//     borderRadius: '20px',
//     marginBottom: '0.5rem',
//   },
//   blogItemHeader: {
//     margin: '0.5rem 0 1rem 0',
//     flex: 1,
//     fontSize:'14px'
//   },
  
//    blogItemDesc: {
//     position: 'relative',
//     maxHeight: '50px',
//     overflow: 'hidden',
//     paddingRight: '0.6rem',
//     fontSize: '0.8rem',
//     color: '#a9a9a9',
//   }
// }  
//display each blog item 
export default function BlogItem() {
  const {id} = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect (() => {
    const fetchBlogs = async () => {
      const response = await fetch (
        //set slow loading effect or pagination
        "http://127.0.0.1:8000/publication/"
      );
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);
  return (
  <>  
    {blogs.map((blog) => 
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={img} alt='cover' />
      <h5>
        {blog.Title}
        <span className="tag font11">{blog.DatePublished}</span>
      </h5>
      <p className='blogItem-desc'>{blog.Description}</p>
      <footer>
        <div className='blogItem-author'>
            <Chip label={blog.Category} />
        </div>
        <Link key={blog.id} className='blogItem-link' to={`/blog/${blog.id}`}>
        Read More ➝
        </Link>
      </footer>
    </div>
    )}
  </>  
  )
}
