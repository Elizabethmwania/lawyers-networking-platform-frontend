import React, { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";

export default function KeepTouch() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName:'',
    PhoneNumber:'',
    Message:'',
  })

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try{
      const response = await fetch("http://127.0.0.1:8000/contact/",{
        method: "POST",
        headers: {
          Accept:'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.status === 200){
        setIsSubmitted(true);
        formRef.current.reset();
      }
      if (isSubmitted) {
        showAlert();
        return <Navigate to='/contact' />;
      }
      console.log(data);  
    }
    catch (error) {
      console.error(error);
    }

  }
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
            <Form ref={formRef} onSubmit={handleSubmit}>
                <label className="font13">First Name:</label>
                  <input type="text"
                    name="FirstName" 
                    value={formData.FirstName} 
                    className="font13"
                    onChange={handleInputChange}
                   />
                <label className="font13">Last Name:</label>

                <input 
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  className="font13" 
                />
                <label className="font13">Phone Number:</label>
                <input 
                  type="text" 
                  name="PhoneNumber"
                  value={formData.PhoneNumber} 
                  className="font13" 
                  onChange={handleInputChange}
                />
                <label className="font13">Message:</label>
                <textarea rows="4" cols="50" 
                  type="text" 
                  name="Message"
                  value={formData.Message}
                  onChange={handleInputChange}  
                  className="font13" 
                />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                    style={{ maxWidth: "150px" }}
                  />
                </SumbitWrapper>
              </Form>
              
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
                /> 
                <span className="font13">network@gmail.com</span>
                <PhoneIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                />
                <span className="font13">+254 711 002 673</span>
                <MapPinIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                />
                <span className="font13">
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
const showAlert = () => {
  Swal.fire({
    title: "Message Sent!",
    text: "You will get feedback within 12 hours",
    icon: "success",
  });
};

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
  padding: 10px 20;
  outline: none;
  color: grey;
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

