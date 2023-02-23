import React, { useState } from 'react';
import styled from "styled-components";
import '../../style/Landing.css'
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
      <Carousel className='courselContainer' activeIndex={index} onSelect={handleSelect}>
      {Carousels.map((carousel) => (
        <Carousel.Item style={{borderBottom:'none'}}>
        <img
          className="d-block w-100 h-50"
          src={carousel.image}
          alt="First slide"
        />
        <Carousel.Caption>
        <LeftSide className="flexCenter">
          <div className="header-container">
            <h1 className="extraBold font30">Networking for Legal Practitioners</h1>
            <HeaderP className="font13">
            Network for Legal Practitioners (NLP) is a platform that connects advocates with advocates; 
            and advocates with other service providers in the legal system. Our core objective is to 
            enable advocates achieve optimum practice by making all legal districts easily accessible, 
            promoting consultations
            </HeaderP>
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
  padding-top: 70px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 960px) {
   margin-top:100px
  }
`;
const HeaderP = styled.div`
  width: 100%;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    margin-bottom:20px;
    display: none;
  }
`;



