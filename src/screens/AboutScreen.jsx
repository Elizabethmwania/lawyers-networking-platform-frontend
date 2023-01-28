import React from 'react';
import AboutServices from '../components/About/AboutServices';
import WhatWeDo from '../components/About/WhatWeDo';
import ClientSlider from '../components/Elements/ClientSlider';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';

const AboutScreen = () => {
    return (
        <>
        <TopNavbar />
        <Header />
        <WhatWeDo/>
        <AboutServices/>
        <Footer/>
        </>
    );
}

export default AboutScreen;
