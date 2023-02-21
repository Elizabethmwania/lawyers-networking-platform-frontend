import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                              type="number"
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
                              required
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
                              required
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
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlhtmlFor="gridCheck"
                          >
                            <label className="form-check-label" htmlhtmlFor="gridCheck">
                    Check here to indicate that you have read and agree to the
                    terms and condition of the{" "}
                    <span onClick={handleShow} style={{ color: "blue" }}>
                      Network of Legal Practitioners
                    </span>
                  </label>
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
        {/* Terms and condition modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", width: "100%" }}>
                <h4>Terms and Conditions</h4>
              </Modal.Title>
         
          </Modal.Header>
          <Modal.Body>
            <strong>Introduction</strong>
            <h6>This agreement governs the relationship between advocates.</h6>
            <h6>Responsibilities of the Holding Advocate</h6>
            The advocate who holds the brief of the other advocate shall:
            <ul>
              <li>
                a. Act only on the instructions of the advocate whose brief
                he/she holds.
              </li>
              <li>
                b. Ensure that all documents and evidence relating to the case
                are safely and securely held.
              </li>
              <li>
                c. Make all reasonable efforts to attend all hearings and
                meetings relating to a matter.
              </li>
              <li>
                d. Conduct themselves professionally and ethically at all times.
              </li>
              <li>
                e. Respect the confidentiality of all information relating to
                matters.
              </li>
            </ul>
            Responsibilities of the Advocate Whose Brief is Held The advocate
            whose brief is being held shall:
            <ul>
              <li>
                a. Provide clear and concise instructions to the holding
                advocate.
              </li>
              <li>
                b. Ensure that all necessary documents and evidence are provided
                to the holding advocate.
              </li>
              <li>
                c. Conduct themselves professionally and ethically at all times.
              </li>
              <li>
                d. Pay any fees or expenses associated with his/her matter as
                agreed.{" "}
              </li>
            </ul>
            <strong>Liability</strong>
            <br/>
            Neither advocate shall be liable for any losses, damages, or
            expenses arising from any act or omission by the other advocate,
            unless such losses, damages, or expenses were caused by a breach of
            this Agreement or/and professionalism.
            <br/>
            <strong>Termination</strong>
            <br/>
            Either advocate may withdraw instructions at any time by giving
            written notice to the other advocate. The holding advocate shall
            return all documents and evidence relating to the matter to the
            advocate whose brief is being held upon termination of instructions.
            <br/>
            <strong> Governing Law </strong>
            <br/>
            This Agreement shall be governed by and construed in accordance with
            the laws of the jurisdiction in which the legal proceeding are
            taking place.
            <br/>
            <strong>Severability</strong>
            <br/>
            If any provision of this Agreement is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect. By participating in this arrangement, both advocates
            confirm that they have read, understood, and agree to this Agreement
            and rules of professional practice.
          </Modal.Body>
          <Modal.Footer>
            <button className="addBrief" onClick={handleClose}>
              Understood
            </button>
          </Modal.Footer>
        </Modal>
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
