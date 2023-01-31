import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutScreen from "./screens/AboutScreen.jsx";
import BlogScreen from "./screens/BlogScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import AllBlogs from './components/Blogs/AllBlogs';
import Landing from "./screens/Landing.jsx";
import './style/Landing.css';

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/blog/:id" element={<AllBlogs />} />
          <Route path="/contact" element={<ContactScreen />} />

        </Routes>
      </Router>
    </>
  );
}

