import React from 'react';
import AllBlogs from '../components/Blogs/AllBlogs';
import BlogHeader from '../components/Blogs/BlogHeader';
import Blogs from '../components/Blogs/Blogs';
import TopNavbar from '../components/Nav/TopNavbar';

const BlogScreen = () => {
    return (
        <>
        <TopNavbar />
        <BlogHeader/>
        <AllBlogs/>
        {/* <Blogs/> */}
        </>
    );
}

export default BlogScreen;
