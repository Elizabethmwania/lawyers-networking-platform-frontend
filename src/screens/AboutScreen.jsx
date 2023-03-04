import React from 'react';
import AboutHeader from '../components/About/AbouHeader';
import WhatWeDo from '../components/About/WhatWeDo';
import Services from '../components/Sections/Services'
import Contact from '../components/Sections/Contact';
import Backdrop from '../components/Elements/Backdrop';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';

const AboutScreen = () => {
    return (
        <>
        <TopNavbar /> 
        <AboutHeader/>
        <WhatWeDo/>
        <Services/>
        {/* <Contact/> */}
        <Backdrop/>
        <Footer/>
        </>
    );
}

export default AboutScreen;
