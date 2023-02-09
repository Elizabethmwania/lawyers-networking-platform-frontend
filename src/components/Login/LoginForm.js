<<<<<<< HEAD
import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { login } from "../../Actions/auth";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import TopNavbar from "../Nav/TopNavbar";
import logo from "../../images/Logos.png";

function LoginForm({ isAuthenticated, login }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
=======
import React from 'react'
import { useForm } from 'react-hook-form';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import image from '../../images/logo/login.png'
export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
>>>>>>> 70bcca6 (logo)

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setIsLoading(true);
  };
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // Feth request
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8000/users/account/${email}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);
  // Redirect user
  if (isAuthenticated) {
    loginSuccess();
    return <Navigate to={`/dashboard/${data.id}`} />;
  }
  return (
    <>
      <TopNavbar />
      <br /> <br />
      <br />
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h5 className="fw-bold mb-1 text-center">Welcome Back</h5>
                  <br />
                  <div className="mb-3">
                    <Row>
<<<<<<< HEAD
                      <div className="col-md-6">
                        <img
                          src={logo}
                          alt="Company Logo"
                          style={{
                            width: "80%",
                            display: "block",
                            paddingTop: "8%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
=======
                      <div className='bg-light col-md-6' >
                        <img src={image} alt="logo" style={{height:'80%', width:'100%'}} />
>>>>>>> 70bcca6 (logo)
                      </div>
                      <div className="col-md-6">
                        <Form onSubmit={(e) => onSubmit(e)}>
                          <Row>
                            <Form.Group className="mb-3" controlId="name">
                              <Form.Label className="text-center">
                                Email Address
                              </Form.Label>
                              <Form.Control
                                label="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                                required
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={(e) => onChange(e)}
                                // minLength="6"
                                required
                              />
                            </Form.Group>
                          </Row>
                          <div style={{ height: "5px" }} />
                          <Row>
                            <label>
                              <input onClick={togglePassword} type="checkbox" />{" "}
                              Show password
                            </label>
                          </Row>
                          <Row>
                            <div
                              className="d-grid"
                              style={{ paddingTop: "20px" }}
                            >
                              <Button
                                variant="primary"
                                type={"submit"}
                                style={{
                                  backgroundColor: "rgb(20, 87, 35)",
                                  border: "0px",
                                }}
                              >
                                {isLoading ? (
                                  <div style={{ marginLeft: "40%" }}>
                                    <Bars
                                      visible={true}
                                      height="25"
                                      width="25"
                                      radius="9"
                                      color="#fff"
                                      ariaLabel="falling-lines-loading"
                                    />
                                  </div>
                                ) : (
                                  "Login"
                                )}
                              </Button>
                            </div>
                          </Row>
                        </Form>
                        <div className="mt-3">
                          <p className="mb-0  text-center">
                            <Link to="/resetpass" className="text-warning">
                              Forgot Password?
                            </Link>
                            <br />
                            <br />
                            <Link to="/register" className="text-warning">
                              New Member
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Row>
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
const loginSuccess = () => {
  Swal.fire({
    title: "Login Sucessfull!",
    text: "Welcome!",
    icon: "success",
  });
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
