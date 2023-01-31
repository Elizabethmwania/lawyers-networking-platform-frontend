import React from 'react'
import { useState } from 'react';
import { blogList } from './Data';
import SearchBar from './SearchBar/SearchBar';
import EmptyList from './EmptyList/EmptyList';
import BlogList from './BlogList/BlogList';
export default function BlogIndex() {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

  return (
    <div>
    <SearchBar
      value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchBar}
      handleSearchKey={(e) => setSearchKey(e.target.value)}
    />

     {/* Blog List & Empty View  */}
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
  </div>
      
  )
}
