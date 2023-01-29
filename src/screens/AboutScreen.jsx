import React from 'react';
import AboutHeader from '../components/About/AbouHeader';
import AboutServices from '../components/About/AboutServices';
import WhatWeDo from '../components/About/WhatWeDo';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';

const AboutScreen = () => {
    return (
        <>
        <TopNavbar />
        <AboutHeader/>
        <WhatWeDo/>
        <AboutServices/>
        <Footer/>
        </>
    );
}

export default AboutScreen;
