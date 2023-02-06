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
      <div className="darkBg flexRowFooter">
        <div className="containerFooter">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <ul>
              <li className="flexColumnFooter">
                <Link className="flexCenter animate pointer" to="/" smooth={true} offset={-80}>
                <img src={LogoIcon} alt='logo' style={{width:'50px', height:'50px'}} />
                </Link>
              </li>
              <li className="flexColumnFooter">Muthaiga Square</li>
              <li className="flexColumnFooter">P.O Box 25-00100</li>
              <li className="flexColumnFooter">24 Hours Open</li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Quick Links
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Home
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Login
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Contact
                </Link>
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Recent Stories
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Home
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Login
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Contact
                </Link>
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                We are Social
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Home
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Login
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Contact
                </Link>
              </li>
            </ul>
          </InnerWrapper>
        </div>
        
      </div>
      <StyleP className="textCenter whiteColor darkBg" style={{marginBottom:'0px'}}>
              © {getCurrentYear()} - <span className="purpleColor font13">
              </span> 
              All Right Reserved
        </StyleP>
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
margin-bottom:'0px';
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;