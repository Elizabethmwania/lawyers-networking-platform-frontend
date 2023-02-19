import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../style/BriefApplication.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";
// Convert date and time to a more readable format
import Moment from "react-moment";

export default function BriefApplication() {
  const [data, setData] = useState([]);
  const [sending, setSending] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Get param details
  const { briefid } = useParams();
  const { id } = useParams();

  let navigate = useNavigate();

  // fetch application details
  useEffect(() => {
    if (briefid) {
      axios
        .get(`http://localhost:8000/brief/${briefid}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [briefid]);

  // Submit Application
  const [application, setApplication] = useState({
    BriefId: briefid,
    FullName: "",
    ApplicantId: id,
    CurrentLocation: "",
    Availability: "",
  });

  const { BriefId, ApplicantId, FullName, CurrentLocation, Availability } =
    application;

  const onApplicationInputChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const submitApplication = async (e) => {
    setSending(true);
    ApplicationNotification();
    e.preventDefault();
    await axios.post("http://localhost:8000/applications/", application);
    navigate(`/briefs/${id}`);
  };
  console.log(FullName);
  // Confirm if application is present
  const [myapp, setMyapp] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:8000/applications/${briefid}`)
      .then((response) => response.json())
      .then((myapp) => {
        setMyapp(myapp);
      });
  };

  useEffect(() => {
    if (briefid) {
      fetchData();
    }
  }, [briefid]);

  const mybrief = myapp.BriefId;
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h3>Brief Application</h3>

            <small>Dashboard / Application form / {data.BriefTitle} </small>
          </div>

          <div className="page-content">
            <div style={{ width: "50%" }}>
              <form
                className="row g-3"
                onSubmit={(e) => {
                  submitApplication(e);
                }}
              >
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="FullName">
                      Full Name: <span className="asterisc">*</span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={FullName}
                      name="FullName"
                      id="FullName"
                      required
                      onChange={(e) => {
                        onApplicationInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="CurrentLocation">
                      Current Location: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={CurrentLocation}
                      name="CurrentLocation"
                      id="CurrentLocation"
                      required
                      onChange={(e) => {
                        onApplicationInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group col-lg-12">
                  <label htmlFor="Availability">
                    Are you available on (
                    <Moment parse="YYYY-MM-DD HH:mm">{data.BriefDate}</Moment>):
                    <span className="asterisc">*</span>
                  </label>
                  <select
                    required
                    className="form-control"
                    value={Availability}
                    name="Availability"
                    onChange={(e) => {
                      onApplicationInputChange(e);
                    }}
                  >
                    <option> -- Select Option -- </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required
                  />
                  <label className="form-check-label" htmlhtmlFor="gridCheck">
                    Check here to indicate that you have read and agree to the
                    terms and condition of the{" "}
                    <span onClick={handleShow} style={{ color: "blue" }}>
                      Network of Legal Practitioners
                    </span>
                  </label>
                </div>
                <br />

                {data.userId == id ? (
                  <button   style={{
                    backgroundColor: "#ccc",
                    border: "0px solid #fff",
                    color: "#000",
                  }}
                  className="btn btn-primary"
                  // type="submit"
                  disabled>You cannot apply your own brief</button>
                ) : (
                  <>
                    {mybrief != null ? (
                      <button
                        style={{
                          backgroundColor: "#ccc",
                          border: "0px solid #fff",
                          color: "#000",
                        }}
                        className="btn btn-primary"
                        // type="submit"
                        disabled
                      >
                        {sending == true ? (
                          <ScaleLoader height="18" width="3" color="#fff" />
                        ) : (
                          "Already Applied!"
                        )}
                      </button>
                    ) : (
                      <button
                        style={{
                          backgroundColor: "#e1b772",
                          border: "0px solid #fff",
                        }}
                        className="btn btn-primary"
                        type="submit"
                      >
                        {sending == true ? (
                          <ScaleLoader height="18" width="3" color="#fff" />
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </main>
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
      </div>
    </div>
  );
}
const ApplicationNotification = () => {
  Swal.fire({
    title: "Brief Application",
    text: "Application has been sent sucessfully!",
    icon: "success",
  });
};
