import React from "react";
import styled from "styled-components";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function KeepTouch() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo className="contact-header">
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ marginLeft:'10%' }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Form>
                <label className="font15">Full Name:</label>
                <input type="text" id="fname" name="fname" className="font13" />
                <label className="font15">Email:</label>
                <input type="text" id="email" name="email" className="font13" />
                <label className="font15">Subject:</label>
                <input type="text" id="subject" name="subject" className="font13" />
                <label className="font15">Message:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font13" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "100%" }}
                className="flexNullCenter flexColumn"
              >
                <EnvelopeIcon 
                  style={{ 
                  height: "30px", 
                  color: "#D49733" 
                  }} 
                /> <span>network@gmail.com</span>
                <PhoneIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                /><span>+254 711 002 673</span>
                <MapPinIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                />
                <span>
                  P.O Box 19 - 00100 <br/>
                  Muthaiga Square, <br/>Nairobi. <br/>
                </span>
                
              </div>
            </div>
          </div>
        </div>
        <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90256.46989614451!2d36.80476501014542!3d-1.2880827889894189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d89586303f%3A0x249cb113a045ce9c!2sKRA%20Offices!5e0!3m2!1sen!2ske!4v1668174135269!5m2!1sen!2ske"
                  width="100%"
                  height="400px"
                  title="map"
                  className="absolute inset-0"
                  loading="lazy"
                  style={{ filter: "opacity(0.7)", border:'0'}}
                  />
      </div>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 0px 0 10px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 1px solid #eed0a1;
    outline: none;
    box-shadow: none;
    height: 30px;
    margin-bottom: 20px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #d49733;
  background-color: #d49733;
  width: fit-content;
  padding: 10px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #143d20;
    border: 1px solid #143d20;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 50px;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

