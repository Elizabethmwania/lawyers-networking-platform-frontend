import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
export default function AboutSection() {
  return (
    <Wrapper>
      <div className="about-container" style={{ paddingTop: "30px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font30 extraBold">Who We Are</h1>
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
  @media (max-width: 860px) {
    justify-content: center;
    
  }
`;
