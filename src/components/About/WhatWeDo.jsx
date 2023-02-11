import React from 'react';
import styled from "styled-components";
import ContactImg1 from "../../images/about/about1.png";
export default function WhatWeDo() {
  return (
    <Wrapper>
      <div className="lightBg">
        <div className="container" style={{width:'80%'}}>
          <HeaderInfo className="contact-header">
            <h1 className="font40 extraBold">About Us</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <AboutContent>
                <h2>What we do</h2>
              <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut            
              labore et dolore magna aliquyam erat, sed diam voluptua.
               <br/> 
               <h2>Mission</h2>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut            
              labore et dolore magna aliquyam erat, sed diam voluptua.
              
              <br/> 
              <h2>Vision</h2>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut            
              labore et dolore magna aliquyam erat, sed diam voluptua.
            
            <h2>Core Values</h2>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut            
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            </AboutContent>
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              {/* <div style={{ width: "50%",marginLeft:'30%' }}> */}
                {/* <div style={{ marginTop: "20px" }}> */}
                  <img src={ContactImg1} alt="about" className="radius6" />
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 20px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const AboutContent = styled.div`
  
  width:80%;
  h2 
  {
    color:#143d20;
    font-size:20px;
    padding-top:20px;
  }
  @media (max-width: 860px) {
    margin-left: 5%
  }
`;


