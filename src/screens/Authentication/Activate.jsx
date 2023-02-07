import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { verify } from "../../Actions/auth";
import TopNavbar from "../../components/Nav/TopNavbar";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../../images/Logos.png";

/* eslint-disable */
const ActivatePage = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const { uid, token } = useParams();

  const verify_account = (e) => {
    verify(uid, token);
    setVerified(true);
  };
  if (verified) {
    showAlert();
    return <Navigate to="/login" />;
  }

 
  return (
    <>
      <TopNavbar />
      <br /> <br />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{
                    width: "40%",
                    display: "block",
                    paddingTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <div className="mb-3 mt-md-4">
                  <h5 className="fw-bold mb-1 text-center">
                    Account Verification Needed
                  </h5>
                  <br />
                  <div className="mb-3">
                    <center>
                      <div className="form-group mb-0">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={verify_account}
                          style={{
                            backgroundColor: "rgb(20, 87, 35)",
                            color: "#fff",
                            border: "0px",
                          }}
                        >
                          Activate Account
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
const showAlert = () => {
  Swal.fire({
    title: "Activation Successfull!",
    text: "Your account has been activated!",
    icon: "success",
  });
};
export default connect(null, { verify })(ActivatePage);
