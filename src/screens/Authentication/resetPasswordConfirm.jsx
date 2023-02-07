import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../../Actions/auth";
import TopNavbar from "../../components/Nav/TopNavbar";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import companylogo from "../../images/Logos.png";

const ResetPasswordConfirmPage = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { uid, token } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/login" />;
  }

  const logo = "Tancy Essays";

  return (
    <>
      <TopNavbar />
      <br /> <br />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
            <img
                  src={companylogo}
                  alt="Company Logo"
                  style={{
                    width: "40%",
                    display: "block",
                    paddingTop: "8%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              <Card.Body>
                
                <div className="mb-3 mt-md-4">
                  <h5 className="fw-bold mb-1 text-center">Reset Password</h5>
                  <br />
                  <div className="mb-3">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="New Password"
                          name="new_password"
                          value={new_password}
                          onChange={(e) => onChange(e)}
                          minLength="6"
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Confirm New Password"
                          name="re_new_password"
                          value={re_new_password}
                          onChange={(e) => onChange(e)}
                          minLength="6"
                          required
                        />
                      </div>
                      <br />
                      <center>
                        <div className="form-group mb-0">
                          <button
                            // onClick={notify}
                            className="btn btn-primary"
                            type="submit"
                            style={{
                              backgroundColor: "rgb(20, 87, 35)",
                              color: "#fff",
                              border: "0px",
                            }}
                          >
                            Reset Password
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

export default connect(null, { reset_password_confirm })(
  ResetPasswordConfirmPage
);
