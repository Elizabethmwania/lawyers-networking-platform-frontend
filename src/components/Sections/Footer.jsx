import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {} from '@heroicons/react/24/solid'
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
              <li className="flexColumnFooter orangeColor">
                About NLP
                {/* <Link className="flexCenter animate pointer" to="/" smooth={true} offset={-80}>
                <img src={LogoIcon} alt='logo' style={{width:'50px', height:'50px'}} />
                </Link> */}
              </li>
              <li className="flexColumnFooter animate">P.O Box 964-00208</li>
              <li className="flexColumnFooter animate">Muthaiga Square,3rd fl, Suite 7</li>
              <li className="flexColumnFooter animate">Thika Rd. Opp Muthaiga Police Station</li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Quick Links
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Home
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Contact Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Publications
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Login
                </Link>
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Services
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Holding Briefs
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Drawing Pleadings
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Filing Documents
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Process Service
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Research
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/' smooth={true} offset={-80}>
                  Recruitment
                </Link>
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Practice Area
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to="/" smooth={true} offset={-80}>
                  Criminal Law
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to="/" smooth={true} offset={-80}>
                  COrporate Law
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to="/" smooth={true} offset={-80}>
                  EmploymentLaw
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to="/" smooth={true} offset={-80}>
                  Intellectual Property
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Family Law
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to="/" smooth={true} offset={-80}>
                  Tax Law
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
    flex-wrap:wrap;
  }
`;
const StyleP = styled.p`
margin-bottom:'0px';
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;