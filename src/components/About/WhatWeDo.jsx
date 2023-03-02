import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from "styled-components";
import ContactImg1 from "../../images/about/about1.png";
export default function WhatWeDo() {
  return (
    <Wrapper>
      <div className="about">
        <div className="container" style={{width:'80%'}}>
          <HeaderInfo className="contact-header">
            <Fade Fade direction="up">
            <h1 className="font30 extraBold">What We Do</h1>
            </Fade>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <AboutContent>
                <Fade direction="down">
                <h2>Access</h2>
                </Fade>
                <Fade direction="down">
                <p className="font13">
                  NLP connects members with service providers in various departments including law firms, court and tribunal registries, 
                  land registries, police stations, prisons, and survey offices which
                  enables them to easily find an advocate to hold brief, make key inquiries, 
                  file/serve documents, make applications, inter alia from the comfort of your office.
                </p> 
                </Fade> 
               <br/> 
               <Fade direction="down">
               <h2>Consultations and recommendations</h2>
               </Fade>
               <Fade direction="down">
               <p className="font13">
                NLP brings together a pool of advocates, both specialized and general practitioners. Their combined 
                knowledge and experience provides an infinite resource in any area of practice you may need 
                help in.The extensive network also enables you to easily find a suitable advocate to refer a client to on matters that you do not wish to handle.
              </p>
                </Fade>
              <br/> 
              <Fade direction="down">
              <h2>Coordinate opportunities</h2>
              </Fade>
              <Fade direction="down">
              <p className="font13">
              NLP connects young and experienced advocates. This way, NLP provides you with either a dependable team to entrust with research or drafting of 
              pleadings/submission; or work opportunities. 
            </p>
            </Fade>
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


