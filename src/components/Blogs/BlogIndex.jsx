import React, { useEffect } from 'react'
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import EmptyList from './EmptyList/EmptyList';
import BlogList from './BlogList/BlogList';

export default function BlogIndex() {
    const [blogs, setBlogs] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect (() => {
      const fetchBlogs = async () => {
        const response = await fetch (
          "http://127.0.0.1:8000/publication/"
        );
        const data = await response.json();
        setAllBlogs(data);
      };
  
      fetchBlogs();
    }, []);

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        // const allBlogs = blogs;
        const filteredBlogs = allBlogs.filter((allBlogs) =>
        allBlogs.Category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(allBlogs);
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

     {/* Blog List and Empty View   */}
    {!blogs.length ? <EmptyList /> : <BlogList blogs={allBlogs} />}
  </div>
      
  )
}
