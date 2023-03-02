import React, { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import ContactImg1 from "../../images/contact/contact1.png";
import ContactImg2 from "../../images/contact/contact2.png";
import ContactImg3 from "../../images/contact/contact3.png";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sending, setSending] = useState(false);
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
    setSending(true);
    showAlert();
    window.location.reload();
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
    <Wrapper>
      <Fade direction="left" delay={500} duration={1000}>
      <div className="contactsection-container" >
        <div className="container">
          <HeaderInfo className="contact-header">
          <Fade direction="up">
            <h1 className="font30 extraBold">Let's get in touch</h1>
            <p className="font13">
            Keep in touch with us for more inquiries.
            </p>
            </Fade>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Form ref={formRef} onSubmit={handleSubmit}>
              {/* <Fade direction="left"> */}
                <label className="font13">First Name:</label>
                  <input 
                    type="text"
                    name="FirstName" 
                    value={formData.FirstName} 
                    className="font13"
                    onChange={handleInputChange}
                    required
                   />
                <label className="font13">Last Name:</label>

                <input 
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInputChange}
                  className="font13"
                  required 
                />
                <label className="font13">Phone Number:</label>
                <input 
                  type="text" 
                  name="PhoneNumber"
                  value={formData.PhoneNumber} 
                  className="font13" 
                  onChange={handleInputChange}
                  required
                />
                <label className="font13">Message:</label>
                <textarea rows="4" cols="50" 
                  type="text" 
                  name="Message"
                  value={formData.Message}
                  onChange={handleInputChange}  
                  className="font13"
                  required 
                />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value={sending == false ? "Send Message" : "Sending.."}
                    className="pointer animate radius8"
                    style={{ maxWidth: "150px" }}
                  />
                </SumbitWrapper>
                {/* </Fade> */}
              </Form>
              {/* </Fade> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              {/* <Fade direction="up"> */}
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
      </Fade>
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
  
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 1px solid #D49733;
    outline: none;
    box-shadow: none;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #D49733;
  background-color: #D49733;
  width: 100%;
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
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









