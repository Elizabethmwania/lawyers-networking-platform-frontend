import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "20px 0" }}>
            <ul>
              <li className="flexColumnFooter orangeColor">
                About NLP
                {/* <Link className="flexCenter animate pointer" to="/" smooth={true} offset={-80}>
                <img src={LogoIcon} alt='logo' style={{width:'50px', height:'50px'}} />
                </Link> */}
              </li>
              <li className="flexColumnFooter animate">P.O Box 964-00208</li>
              <li className="flexColumnFooter animate">Muthaiga Square,
              <br/>3rd fl, Suite 7.</li>
              <li className="flexColumnFooter animate">Thika Rd. Opp 
              <br/>Muthaiga Police Station</li>
              <li className="flexColumnFooter animate">
                TILL: 8102198
              </li>
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
                <Link className="flexColumnFooter animate" to='/about' smooth={true} offset={-80}>
                  About Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/contact' smooth={true} offset={-80}>
                  Contact Us
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/blog' smooth={true} offset={-80}>
                  Publications
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/login' smooth={true} offset={-80}>
                  Login
                </Link>
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate" to='/register' smooth={true} offset={-80}>
                  Join
                </Link>
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Services
              </li>
              <li className="flexColumnFooter">
                Holding Briefs
              </li>
              <li className="flexColumnFooter">
                Drawing Pleadings
              </li>
              <li className="flexColumnFooter">
                Filing Documents
              </li>
              <li className="flexColumnFooter">
                 Process Service
              </li>
              <li className="flexColumnFooter">
                 Research
              </li>
              <li className="flexColumnFooter">
                Recruitment
              </li>
            </ul>
            <ul>
              <li className="flexColumnFooter orangeColor">
                Practice Area
              </li>
              <li className="flexColumnFooter">
                Criminal Law
              </li>
              <li className="flexColumnFooter">
                 Corporate Law
              </li>
              <li className="flexColumnFooter">
                EmploymentLaw
              </li>
              <li className="flexColumnFooter">
                Intellectual Property
              </li>
              <li className="flexColumnFooter">
                <Link className="flexColumnFooter animate pointer" to="/" smooth={true} offset={-80}>
                  Family Law
                </Link>
              </li>
              <li className="flexColumnFooter">
                Tax Law
               
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
    margin: 0px;
  }
`;