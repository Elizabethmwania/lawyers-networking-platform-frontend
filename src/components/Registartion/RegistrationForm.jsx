import React from 'react'
import { useForm } from 'react-hook-form';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function RegistrationForms() {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }));
        console.log(JSON.parse(localStorage.getItem(data.email)));
      };
    
    return (
      <>
      <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Logo</h2>
                  <div className="mb-3">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className="text-center">
                                        Name
                                    </Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className="text-center">
                                        P/Number
                                    </Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>
                        </Row>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email"/>
                      </Form.Group>
                      <Row>
                        <Col>
                            <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            >
                                <Form.Label>Residence</Form.Label>
                                <Form.Control as="select" value="counties" type="text" placeholder="Select County">
                                    <option selected>--Select--</option>
                                    <option value="">Mombasa</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            >
                                <Form.Label>Practice Area</Form.Label>
                                <Form.Control as="select" value="counties" type="text">
                                    <option selected>--Select--</option>
                                    <option value="">Divorce</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" style={{backgroundColor:'rgb(20, 87, 35)'}}>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary fw-bold">Log In</Link>
                        
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
       

        {/* <h3>Register Here</h3>
        <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
            <label>username</label>
          <input type="text" {...register("name")} />
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
          <input type="password" {...register("password")} />
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form> */}
      </>
  )
}
