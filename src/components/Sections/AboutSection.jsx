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
            <h1 className="font30 extraBold">What We Do</h1>
            <p className="font14">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with 
            the release of Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </HeaderInfo>
          <ButtonsRow className="flexNullCenter" style={{ margin: "20px 0" }}>
            <div style={{ width: "fit-content" }}>
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
    text-align: center;
  }
`;

const ButtonsRow = styled.div`
justify-content: center;
  @media (max-width: 860px) {
    justify-content: center;
  }
`;
