import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { signup } from "../../Actions/auth";
import { useForm } from "react-hook-form";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopNavbar from "../Nav/TopNavbar";
import logo from "../../images/Logos.png";

function RegistrationForm({ signup, isAuthenticated }) {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    FirstName: "",
    LastName: "",
    P105Number: "",
    Location: "",
    AreaofPractice: "",
    password: "",
    re_password: "",
  });

  const {
    email,
    FirstName,
    LastName,
    Location,
    P105Number,
    AreaofPractice,
    password,
    re_password,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(
        email,
        FirstName,
        LastName,
        Location,
        P105Number,
        AreaofPractice,
        password,
        re_password
      );
      setAccountCreated(true);
    } else {
      PasswordError();
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    showAlert();
    return <Navigate to="/login" />;
  }
  console.log(formData);

  return (
    <>
      <TopNavbar />
      <br /> <br />
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
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form onSubmit={(e) => onSubmit(e)}>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">
                              First Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="FirstName"
                              placeholder="FirstName *"
                              value={FirstName}
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="LastName"
                              placeholder="LastName *"
                              value={LastName}
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="Pnumber">
                            <Form.Label className="text-center">
                              Email Address
                            </Form.Label>
                            <Form.Control
                              label="Email"
                              placeholder="Email Address"
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="Pnumber">
                            <Form.Label className="text-center">
                              P/Number
                            </Form.Label>
                            <Form.Control
                              label=" P/Number"
                              placeholder=" P/Number"
                              type="text"
                              name="P105Number"
                              value={P105Number}
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="county">
                            <Form.Label>Location</Form.Label>
                            <select
                              id="Location"
                              className="form-select"
                              name="Location"
                              value={Location}
                              onChange={(e) => onChange(e)}
                            >
                              <option>--Select Location--</option>
                              <option>Nairobi</option>
                              <option>Mombasa</option>
                              <option>Kisumu</option>
                              <option>Eldoret</option>
                              <option>Isiolo</option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="practiceArea">
                            <Form.Label>Practice Area</Form.Label>
                            <select
                              id="AreaofPractice"
                              className="form-select"
                              name="AreaofPractice"
                              value={AreaofPractice}
                              onChange={(e) => onChange(e)}
                            >
                              <option>--Area of Practice--</option>
                              <option>Civil Law</option>
                              <option>Criminal Law</option>
                              <option>Interlectual Property</option>
                              <option>Family</option>
                              <option>Land</option>
                            </select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password*"
                              name="password"
                              value={password}
                              onChange={(e) => onChange(e)}
                              // minLength="6"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Confirm Password*"
                              name="re_password"
                              value={re_password}
                              onChange={(e) => onChange(e)}
                              // minLength="6"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="col-md-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlhtmlFor="gridCheck"
                          >
                            I agree to the Terms & Conditions and privacy policy
                          </label>
                        </div>
                      </div>
                      <br />
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type={"submit"}
                          style={{
                            backgroundColor: "rgb(20, 87, 35)",
                            border: "0px",
                          }}
                        >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Log In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const showAlert = () => {
  Swal.fire({
    title: "Registration Sucessfull!",
    text: "Kindly check Email to activate account!",
    icon: "success",
  });
};

const PasswordError = () => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Password do not match!",
  });
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(RegistrationForm);
