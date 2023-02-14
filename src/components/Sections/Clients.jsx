import React from 'react'
import styled from 'styled-components';
import ClientSlider from "../Elements/ClientSlider";

export default function Clients() {
  return (
    <div className="lightBg" style={{padding: '30px'}}>
        <div className="container">
          <HeaderInfo className='clients-header'>
            <h1 className="font30 extraBold">Trusted clients</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ClientSlider />
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
