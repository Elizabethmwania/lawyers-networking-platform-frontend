import React from "react";
import styled from "styled-components";
import '../../style/Landing.css'
import practice2 from '../../images/practice/law1.png';
import practice1 from '../../images/practice/liftarn_French_lawyer_early_20th_century..svg';
import practice3 from '../../images/practice/male-computer-user16-0053406wqhcfa.svg';
import practice4 from '../../images/practice/law2.png'
import practice5 from '../../images/practice/law4.png'
import practice6 from '../../images/practice/law7.png'
import practice7 from '../../images/practice/images'
import practice8 from '../../images/practice/law11.png'
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
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
            <img src={practice1} style={{width:'100px', height:'100px'}} alt="practice-area" />
              <span className="font13">Corporate Law</span>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
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
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
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
            </ServiceBoxWrapper>
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
display: flex;
flex-flow: row wrap;
align-content: space-between;
justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
margin: 10px 50px 50px 0;
width: 100px;
color: #D49733;
font-weight: 200;
height: 100px;
text-align: center;
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