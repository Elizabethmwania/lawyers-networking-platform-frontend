import React, { useState } from 'react';
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import '../../style/Landing.css'
import carouselImg from '../../assets/img/Carousel/img1.png';
import { Carousels } from '../../components/Data/Data';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
  return (
    <Wrapper className="flex flexColumn" style={{minHeight:'0px'}}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      {Carousels.map((carousel) => (
        <Carousel.Item style={{borderBottom:'none'}}>
        <img
          className="d-block w-100"
          src={carouselImg}
          alt="First slide"
        />
        <Carousel.Caption>
        <LeftSide className="flexCenter">
          <div className="header-container">
            <h1 className="extraBold font40">Networking for Legal Practitioners</h1>
            <HeaderP className="font18 semiBold">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </HeaderP>
            <BtnWrapper>
              <FullButton title="Get Started" />
            </BtnWrapper>
          </div>
        </LeftSide> 
        </Carousel.Caption>
      </Carousel.Item>

      ) )}
      
    </Carousel>
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
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;



