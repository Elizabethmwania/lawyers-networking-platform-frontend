import React from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import store from "./store";
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
import RegistrationForm from "./components/Registartion/RegistrationForm.jsx";
import LoginForm from "./components/Login/LoginForm.js";
import Activate from "./screens/Authentication/Activate";
import ResetPassword from "./screens/Authentication/resetPassword";
import ResetPasswordConfirm from "./screens/Authentication/resetPasswordConfirm";

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
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/blog" element={<BlogScreen />} />
            <Route path="/blog/:id" element={<AllBlogs />} />
            <Route path="/contact" element={<ContactScreen />} />
            {/* Authentication Links */}
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="/resetpass" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            {/* Dashboard */}
            <Route path="/dashboard/:id" exact element={<DashboardScreen />} />
            <Route path="/briefs/:id" exact element={<BriefScreen />} />
            <Route
              path="/application/:id/:briefid"
              exact
              element={<BriefApplication />}
            />
            <Route path="/ViewDetails/:id/:dataId" exact element={<ViewDetails />} />
            <Route path="/mybriefs/:id" exact element={<MyBriefs />} />
            <Route path="/inbox/:id" exact element={<InboxScreen />} />
            <Route path="/reports/:id" exact element={<ReportsScreen />} />
            <Route path="/profile/:id" exact element={<ProfileScreen />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
