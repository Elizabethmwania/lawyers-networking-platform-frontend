import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
export default function Backdrop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
      <ScrollToTop
      smooth
      style={{
        bottom: '20px',
        width: '50px',
        height: '50px',
        backgroundColor:'#d49733',
      }}
      />
  )
}

