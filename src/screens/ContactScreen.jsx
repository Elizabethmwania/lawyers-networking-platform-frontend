import React from 'react';
import ContactHeader from '../components/Contact/ContactHeader';
import KeepTouch from '../components/Contact/KeepTouch';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';

const ContactScreen = () => {
    return (
        <>
          <TopNavbar /> 
          <ContactHeader/>
          <KeepTouch/> 
          <Footer/>
        </>
    );
}

export default ContactScreen;
