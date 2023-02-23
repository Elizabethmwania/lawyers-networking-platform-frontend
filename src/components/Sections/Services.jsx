import React from "react";
import styled from "styled-components";
import '../../style/Landing.css'
import practice2 from '../../images/svg/corporate.svg';
import practice1 from '../../images/svg/tax.svg';
import practice3 from '../../images/svg/employment.svg';
import practice4 from '../../images/practice/law2.png'
import practice5 from '../../images/practice/law4.png'
import practice6 from '../../images/practice/law7.png'
import practice7 from '../../images/practice/images'
import practice8 from '../../images/practice/law11.png'
import { Col, Row } from "react-bootstrap";
export default function Services() {
  return (
    <Wrapper>
      <div className="service-container" style={{ paddingTop: "30px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font30 extraBold">Practice Area</h1>
            <p className="font13">
            NLP is structured in a way that develops knowledge by publishing unique information specific to different geographical locations ensuring advocates tailor make 
            practice to suit the local practices of different regions to better serve their clients.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="">
            <Row className="">
              <Col className="">
                {/* <ServiceBoxWrapper> */}
                  <div className="imageContainer">
                  <img src={practice2} className="serviceImage"alt="practice-area" /></div>
                {/* </ServiceBoxWrapper> */}
                <p className=" font13 textCenter">Corporate Law</p>
              </Col>
              <Col className="col-md-4">
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                  <img src={practice1} className="serviceImage"alt="practice-area" /></div>
                </ServiceBoxWrapper>
                <p className=" font13 textCenter">Tax Law</p>
              </Col>
              <Col className="col-md-4">
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={practice3} className="serviceImage"alt="practice-area" />
                  </div>
                  <p className=" font13 textCenter">Employment Law</p>
                </ServiceBoxWrapper>
              </Col>
              {/* <Col className="col-4"> */}
                {/* <ServiceBoxWrapper> */}
                  {/* <img src={practice2} style={{width:'100px', height:'100px'}} alt="practice-area" /> */}
                {/* </ServiceBoxWrapper> */}
              {/* <p className="">Corporate Law</p>
              </Col> */}
            </Row>
            
            {/* <ServiceBoxWrapper>
            <img src={practice2} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Human Rights</span>
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
            <img src={practice3} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Employment Law</span>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img src={practice4} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Intellectual Property</span>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img src={practice6} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Tax Law</span>
            </ServiceBoxWrapper> */}
            
            {/* <ServiceBoxWrapper>
            <img src={practice7} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Criminal Law</span>
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
            <img src={practice5} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Family Law</span>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
            <img src={practice8} style={{width:'100px', height:'100px'}} alt="practice-area"/>
              <span className="font13">Conveyancing</span>
            </ServiceBoxWrapper> */}
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`

  @media (max-width: 860px) {
    flex-direction: column;
    margin-left:0px;
  }
`;
const ServiceBoxWrapper = styled.div`

  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: left;
  }
`;

const ButtonsRow = styled.div`
justify-content: center;
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;