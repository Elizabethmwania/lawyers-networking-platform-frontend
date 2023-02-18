import React from 'react'
import styled from 'styled-components';
import logo from '../../images/omwanza-law.png'

export default function Clients() {
  return (
    <div className="clients-container" style={{padding: '30px'}}>
        <div className="container">
          <HeaderInfo className='clients-header'>
            <h1 className="font30 extraBold">Our Partner</h1>
            {/* <p className="font13">
              Various partners has joined us to enhance our services to ours clients
            </p> */}
          </HeaderInfo>
          <div className='clientFlexSpaceCenter font13'>
            <img className='' src={logo} alt="omwanza-law-firm" style={{height:'150px', marginRight:'50px'}}/>
            <span>
              <p>
                P.O Box 964-00208
                <br/>
                Muthaiga Square, 
                3rd fl, Suite 7
                <br/>
                Email: omwanzalaw@gmal.com
                <br/>
                Phone: +254 722 791 366
                </p>
            </span>
          </div>
        </div>
      </div>
  )
}

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  align-content:center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
