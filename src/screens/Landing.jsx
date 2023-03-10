import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import AboutSection from "../components/Sections/AboutSection";
import Backdrop from "../components/Elements/Backdrop";
import Clients from "../components/Sections/Clients";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AboutSection />
      <Services />
      <Blog />
      <Clients/>
      {/* <Contact /> */}
      <Backdrop/>
      <Footer />
    </>
  );
}


