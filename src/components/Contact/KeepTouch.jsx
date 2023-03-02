import React, { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function KeepTouch() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    setSending(true);
    showAlert();
    window.location.reload();
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        setIsSubmitted(true);
        formRef.current.reset();
      }
      if (isSubmitted) {
        return <Navigate to="/contact" />;
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo className="contact-header">
          <Fade direction="up" delay={200} duration={1000}>
            <h1 className="font30 extraBold">Let's get in touch</h1>
            <p className="font13">
            Keep in touch with us for more inquiries.
            </p>
            </Fade>
          </HeaderInfo>
          <div className="row" style={{ marginLeft: "10%" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={formRef} onSubmit={handleSubmit}>
              <Fade direction="up" delay={200} duration={1000}>
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
                <textarea
                  rows="4"
                  cols="50"
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
                    // sending
                    className="pointer animate radius8"
                    style={{ maxWidth: "150px" }}
                  />
                </SumbitWrapper>
                </Fade>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
            {/* <Fade direction="up" delay={500} duration={1000}> */}
              <div
                style={{ width: "100%" }}
                className="flexNullCenter flexColumn"
              >
                <EnvelopeIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                  }}
                />
                <Fade direction="up" delay={200} duration={1000}>
                <span className="font13">nlpeafrica@gmal.com</span>
                </Fade>
                <PhoneIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                />
                <Fade direction="up" delay={200} duration={1000}>
                <span className="font13">+254 722 791 366</span>
                </Fade>
                <MapPinIcon
                  style={{
                    height: "30px",
                    color: "#D49733",
                    marginTop: "50px",
                  }}
                />
                <Fade direction="up" delay={200} duration={1000}>
                <span className="font13">
                  P.O Box 964-00208
                  <br/>
                  Muthaiga Square, 
                  <br/>
                  3rd fl, Suite 7
                  <br/>
                  Nairobi. <br />
                </span>
                </Fade>
              </div>
              {/* </Fade> */}
            </div>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.66780499268!2d36.81300841715545!3d-1.2730746905721804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16eb9601573b%3A0xd3fd21052bcc867f!2sMuthaiga%20Square%20-%20Nairobi!5e0!3m2!1sen!2ske!4v1677773179154!5m2!1sen!2ske"
          width="100%"
          height="400px"
          title="map"
          className="absolute inset-0"
          loading="lazy"
          style={{ filter: "opacity(0.7)", border: "0" }}
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
