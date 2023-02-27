import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
// import '../../style/Landing.css'
import corporate from '../../images/svg/corporate.svg';
import tax from '../../images/svg/tax.svg';
import employment from '../../images/svg/employment.svg';
import convey from '../../images/svg/convey.svg';
import human from '../../images/svg/human.svg';
import intellectual from '../../images/svg/intellectual.svg';
import FullButton from "../Buttons/FullButton";


const ReadMore = ({ children }) => {
  const services = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Row>
      {isReadMore ? services.slice(0, 3) : services}
      <span onClick={toggleReadMore} className="flexCenter">
        {isReadMore ?   
        <ButtonsRow>
          <FullButton title="Show More . . ." />
        </ButtonsRow>
        : 
        <ButtonsRow>
          <FullButton title="Shore Less" />
        </ButtonsRow>
        }
      </span>
    </Row>
  );
};
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
          <ServiceBoxRow>
            <Row>
            <ReadMore>
              <Col>
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                   <img src={corporate} className="serviceImage"alt="practice-area" />
                  </div>
                </ServiceBoxWrapper>  
                <p className=" font13 textCenter">Corporate Law</p>
              </Col>
              <Col>
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={human} className="serviceImage"alt="practice-area" />
                  </div>
                </ServiceBoxWrapper>
                <p className=" font13 textCenter">Human Rights Law</p>
              </Col>
              <Col>
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={convey} className="serviceImage"alt="practice-area" />
                  </div>
                  <p className=" font13 textCenter">Conveyancing</p>
                </ServiceBoxWrapper>
              </Col>
              <Col>
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={tax} className="serviceImage"alt="practice-area" />
                  </div>
                  <p className=" font13 textCenter">Tax Law</p>
                </ServiceBoxWrapper>
              </Col>
              <Col>
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={employment} className="serviceImage"alt="practice-area" />
                  </div>
                  <p className=" font13 textCenter">Employment Law</p>
                </ServiceBoxWrapper>
              </Col>
              <Col className="col-md-4">
                <ServiceBoxWrapper>
                  <div className="imageContainer">
                    <img src={intellectual} className="serviceImage"alt="practice-area" />
                  </div>
                  <p className=" font13 textCenter">Intellectual Property</p>
                </ServiceBoxWrapper>
              </Col>
              </ReadMore>
            </Row>
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
    padding: 10px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: left;
  }
`;

const ButtonsRow = styled.div`
justify-content: center;
float:right;
width:fit-content;
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;