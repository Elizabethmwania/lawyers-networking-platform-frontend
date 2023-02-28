import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import { Fade } from "react-awesome-reveal";
export default function AboutSection() {
  return (
    <Wrapper>
      {/* <Fade direction="up"> */}
      <div className="about-container" style={{ paddingTop: "30px" }}>
        <div className="container">
          <HeaderInfo>
            <Fade direction="up">
             <h1 className="font30 extraBold">Who We Are</h1>
            </Fade> 
            <Fade direction="up">
            <p className="font13">
            Network for Legal Practitioners (NLP) is a platform that connects advocates 
            with advocates; and advocates with other service providers in the legal system. 
            Our core objective is to enable advocates achieve optimum practice by making all 
            legal districts easily accessible, promoting consultations and recommendations, 
            and coordinating opportunities. 
            <br/>
            Our services include but not limited to Holding Brief, Drawing pleadings, Filing documents,
            Process service, Research and Recruitment.
            </p>
            </Fade>
          </HeaderInfo>
          <ButtonsRow className="flexNullCenter" style={{ margin: "20px 0" }}>
            <div >
              <Link to='/about'>
                <FullButton title="Read More . . ." />
              </Link>
            </div>
          </ButtonsRow>
           
        </div>
      </div> 
      {/* </Fade> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`

  @media (max-width: 860px) {
    text-align: left;
  }
`;

const ButtonsRow = styled.div`
justify-content: center;
animation-duration: 1s;
animation-iteration-count: 1;
transform-origin: bottom;

:hover {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}
  @media (max-width: 860px) {
    justify-content: center;
    
  }
`;
