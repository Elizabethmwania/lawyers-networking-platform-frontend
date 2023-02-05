import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const selectCounty = [
  { value: 'nairobi', label: "Nairobi" },
  { value: 'mombasa', label: "Mombasa" },
  { value: 'kisumu', label: "Kisumu" }
];

const selectPracticeArea = [
  { value: 'education', label: "Education" },
  { value: 'marriage', label: "Marriage" },
  { value: 'criminal', label: "Criminal" }
];

export default function RegistrationForm() {
    const {register, handleSubmit, control, formState: { errors } } = useForm();
    const [selectedCounty, setSelectedCounty] = useState(null);
    const [selectedPractice, setSelectedPractice] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleCountyChange = selectedCounty => {
      setSelectedCounty(selectedCounty);
    }

    const handlePracticeChange = selectedPractice => {
      setSelectedPractice(selectedPractice);
    }

    const onSubmit = (data) => {
        setShowPopup(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, pnumber: data.pnumber, email: data.email, county: data.county, practiceArea: data.practiceArea, password: data.password 
        }));
        console.log(JSON.parse(localStorage.getItem(data.email)));
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
                
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Logo</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    {Object.keys(errors).length > 0 && <p style={{color:'red'}}>All fields are mandatory!</p>}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className="text-center">
                                        Full Name
                                    </Form.Label>
                                    <Form.Control type="text" {...register("name",{ required:true })} />
                                    {/* {errors.name && <p style={{color:'red'}}>Name is required</p>} */}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="Pnumber">
                                    <Form.Label className="text-center">
                                        P/Number
                                    </Form.Label>
                                    <Form.Control type="text" {...register("pnumber", {required: true})} />
                                    {/* {errors.pnumber && <p style={{color:'red'}}>P/Number is required</p>} */}
                                </Form.Group>
                            </Col>
                        </Row>
                      <Form.Group className="mb-3" controlId="Email">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" {...register("email", {required:true})} />
                      </Form.Group>
                      <Row>
                        <Col>
                            <Form.Group
                            className="mb-3"
                            controlId="county"
                            >
                                <Form.Label>Residence</Form.Label>
                                <Controller
                                name="county"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                  <Select options={selectCounty} {...field} 
                                  onChange={handleCountyChange} 
                                  value={selectedCounty} 
                                  label="Text Field"
                                  />
                                )}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                            className="mb-3"
                            controlId="practiceArea"
                            >
                                <Form.Label>Practice Area</Form.Label>
                                <Controller 
                                name='practiceArea'
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                  <Select 
                                  options={selectPracticeArea} 
                                  {...field} 
                                  onChange={handlePracticeChange} 
                                  value={selectedPractice}
                                  />
                                )}
                                />
                            </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group
                        className="mb-3"
                        controlId="password"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register("password", {required:true})} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type={"submit"} style={{backgroundColor:'rgb(20, 87, 35)'}}>
                          Create Account
                        </Button>
                      </div>
                      {showPopup && (
                      <div style={{
                        position: 'fixed',
                        width:'100%',
                        bottom: 20,
                        right: 20,
                        background: 'green',
                        color: 'white',
                        padding: '1em',
                        borderRadius: '5px',
                        opacity: 0,
                        transition: 'opacity 0.5s ease-in-out'
                      }}>
                        Form Submitted Successfully!
                      </div>
                    )}
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
      
    </>
  )
}
