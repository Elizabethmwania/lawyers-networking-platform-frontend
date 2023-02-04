import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogList } from './Data';
import EmptyList from './EmptyList/EmptyList';
import BlogList from './BlogList/BlogList';
export default function RecentBlogs() {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };


  return (

    <>
     <div className='recentBlogsContainer'>   
     <h3>Most Recent</h3>
     {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs.slice(1,3)} />}
     </div>
    </>
      
  )
}
