import React from 'react';
import { blogList } from '../components/Blogs/Data';
import BlogHeader from '../components/Blogs/BlogHeader';
import TopNavbar from '../components/Nav/TopNavbar';
import BlogIndex from '../components/Blogs/BlogIndex';

const BlogScreen = () => {
    return (
        <>
        <TopNavbar />
        <BlogHeader/>
        <div className='blog-container'>
            <div className='blog-flex'>
            <BlogIndex/>
            </div>
            <div className='sidebar-flex'>
                Categories
            </div>
            
        </div>
        {/* <AllBlogs/> */}
        {/* <Blogs/> */}
        
        </>
    );
}

export default BlogScreen;
