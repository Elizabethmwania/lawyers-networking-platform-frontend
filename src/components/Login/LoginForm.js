import React from 'react'
import { useForm } from 'react-hook-form';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    // if (userData) { 
      // getItem can return actual value or null
      if (data.password === '12345') {
        alert(" You Are Successfully Logged In");
        // console.log(userData.name + " You Are Successfully Logged In");
        navigate("/")
      } else {
        alert("Email or Password is Incorrect");
        navigate("/login")
        // console.log("Email or Password is not matching with our record");
      }
    // } else {
    //   alert("Email or Password is Incorrect")
    //   console.log("User not Found");
    // }
  };
  return (
    <>
    <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                
                  <p className="fw-bold mb-2 text-center">Welcome back,</p>
                  <br/>
                  <div className="mb-3">
                    <Row>
                      <div className='col-md-6' >
                        image
                      </div>
                      <div className='col-md-6' >
                        <Form onClick={handleSubmit(onSubmit)} >
                        {/* {Object.keys(errors).length > 0 && <p style={{color:'red'}}>All fields are mandatory!</p>} */}
                          <Row>
                            <Form.Group className="mb-3" controlId="name">
                              <Form.Label className="text-center">
                                P/Number
                              </Form.Label>
                              <Form.Control type='text' {...register("pnumber",{ required:true })}/>
                              {/* {errors.pnumber && <p style={{color:'red'}}>P/Number is required</p>}  */}
                            </Form.Group>
                            </Row>
                            <Row>
                            <Form.Group controlId="password">
                              <Form.Label>
                                Password
                              </Form.Label>
                              <Form.Control type='password' {...register("password",{ required:true })}/>
                              {/* {errors.password && <p style={{color:'red'}}>Password is required</p>}  */}
                            </Form.Group>
                          </Row>
                          <Row>
                          <Form.Group controlId="checkbox" style={{paddingTop:'20px'}}>
                            <Form.Check type="checkbox" label="Remember me" />
                          </Form.Group>
                          </Row>
                          <Row>
                            <div className="d-grid" style={{paddingTop:'20px'}}>
                              <Button variant="primary" type={"submit"} style={{backgroundColor:'rgb(20, 87, 35)'}}>
                                Login
                              </Button>
                            </div>
                          </Row>
                        </Form>
                        <div className="mt-3">
                           <p className="mb-0  text-center">
                            <Link to="/login" className="text-warning">Forgot Password?</Link>
                            <br/>
                            <br/>
                            <Link to="/register" className="text-warning">New Member</Link>
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
  )
}
