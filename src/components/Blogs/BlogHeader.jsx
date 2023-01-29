import React from "react";
import styled from "styled-components";
import '../../style/Landing.css'
import carouselImg from '../../images/about/about-banner.png';


export default function BlogHeader() {
  
  return (
    <Wrapper className="flex flexColumn" style={{minHeight:'0px'}}>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="First slide"
        />
    </Wrapper>    
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;



