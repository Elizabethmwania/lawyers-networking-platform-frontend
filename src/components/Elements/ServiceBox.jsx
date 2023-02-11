import React from "react";
import styled from "styled-components";
import practiceIcon from '../../images/practice/Ellipse 10.png'

export default function ServiceBox({title, subtitle}) {
  //add prop image...
  return (
    <Wrapper className="flexColumn">
      <IconStyle>
        <img src={practiceIcon} alt="clientIcon" />
      </IconStyle>
      <TitleStyle className="font13 extraBold textLeft">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display:flex;
  align-content:center;
  align-items: center;
`;
const IconStyle = styled.div`
margin-left:0px;
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin-left:150px; 
  padding: 20px 10px; 
  @media (max-width: 860px) {
    padding: 20px 0;
    margin-left:0px;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;