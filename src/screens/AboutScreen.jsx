import React from 'react';
import AboutHeader from '../components/About/AbouHeader';
import WhatWeDo from '../components/About/WhatWeDo';
import Backdrop from '../components/Elements/Backdrop';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
import Contact from '../components/Sections/Contact';
const AboutScreen = () => {
    return (
        <>
        <TopNavbar />
        <AboutHeader/>
        <WhatWeDo/>
        <Contact/>
        <Backdrop/>
        <Footer/>
        </>
    );
}

export default AboutScreen;
