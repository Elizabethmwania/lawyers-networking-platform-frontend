import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../../Actions/auth";
import TopNavbar from "../../components/Nav/TopNavbar";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import logo from "../../images/Logos.png";

const ResetPasswordPage = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
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
                  <h5 className="fw-bold mb-1 text-center">Reset Password</h5>
                  <br />
                  <div className="mb-3">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter Email"
                          name="email"
                          value={email}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                      <br />

                      <center>
                        <div className="form-group mb-0">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            style={{
                              backgroundColor: "rgb(20, 87, 35)",
                              color: "#fff",
                              border: "0px",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </center>
                    </form>
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
export default connect(null, { reset_password })(ResetPasswordPage);
