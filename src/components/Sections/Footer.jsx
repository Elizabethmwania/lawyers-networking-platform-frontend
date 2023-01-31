import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import LogoIcon from '../../images/logo/logo.jpg'

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="/" smooth={true} offset={-80}>
              <img src={LogoIcon} alt='logo' style={{width:'50px', height:'50px'}} />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                NFLP
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">
              </span> 
              All Right Reserved
            </StyleP>
              {/* To be implemented*/}
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;