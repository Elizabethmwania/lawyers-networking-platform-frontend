import React from 'react';
import AboutHeader from '../components/About/AbouHeader';
import AboutServices from '../components/About/AboutServices';
import WhatWeDo from '../components/About/WhatWeDo';
import Backdrop from '../components/Elements/Backdrop';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
const AboutScreen = () => {
    return (
        <>
        <TopNavbar />
        <AboutHeader/>
        <WhatWeDo/>
        <AboutServices/>
        <Backdrop/>
        <Footer/>
        </>
    );
}

export default AboutScreen;
