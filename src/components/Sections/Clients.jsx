import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../images/omwanza-law.png'

export default function Clients() {
  return (
    <Wrapper>
    <div className="clients-container" style={{padding: '30px'}}>
        <div className="container">
          <HeaderInfo className='clients-header'>
            <Fade direction='up'>
            <h1 className="font30 extraBold">Our Partner</h1>
            </Fade>
          </HeaderInfo>
          <div className='flexCenter font13'>
          <Row>
          
            <Col>
            <Fade direction='up' delay={200}>
            <img className='' src={logo} alt="omwanza-law-firm" style={{height:'150px', marginRight:'50px'}}/>
            </Fade>
            </Col>
            <Col>
            <Fade direction='up' cascade delay={300}>
            {/* <span> */}
              <p>
                P.O Box 964-00208
                <br/>
                Muthaiga Square, 
                3rd fl, Suite 7
                <br/>
                Thika Rd. Opp
                Muthaiga Police Station
                <br/>
                TILL: 8102198
                <br/>
                Email: omwanzalaw@gmal.com
                <br/>
                Phone: +254 722 791 366
                </p>
            {/* </span> */}
            </Fade>
            </Col>
            </Row>
            </div>
          </div>
        </div>
        
      {/* </div> */}
    </Wrapper>  
  )
  
}
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  align-content:center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
