import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen.jsx";
import BlogScreen from "./screens/BlogScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import AllBlogs from "./components/Blogs/AllBlogs";
import Landing from "./screens/Landing.jsx";
import "./style/Landing.css";
import BriefApplication from "./screens/BriefApplication.jsx";
import BriefScreen from "./screens/BriefScreen.jsx";
import DashboardScreen from "./screens/DashboardScreen.jsx";
import InboxScreen from "./screens/InboxScreen.jsx";
import MyBriefs from "./screens/MyBriefs.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import ReportsScreen from "./screens/ReportsScreen.jsx";
import ViewDetails from "./screens/ViewDetails.jsx";
import Backdrop from "./components/Elements/Backdrop.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/blog/:id" element={<AllBlogs />} />
          <Route path="/contact" element={<ContactScreen />} />
          {/* Dashboard */}
          <Route path="/dashboard" exact element={<DashboardScreen />} />
          <Route path="/briefs" exact element={<BriefScreen />} />
          <Route path="/application/:id" exact element={<BriefApplication />} />
          <Route path="/ViewDetails/:id" exact element={<ViewDetails />} />
          <Route path="/mybriefs" exact element={<MyBriefs />} />
          <Route path="/inbox" exact element={<InboxScreen />} />
          <Route path="/reports" exact element={<ReportsScreen />} />
          <Route path="/profile" exact element={<ProfileScreen />} />
        </Routes>
      </Router>
    </>
  );
}
