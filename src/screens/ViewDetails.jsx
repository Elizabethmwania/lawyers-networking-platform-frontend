import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import '../style/BriefApplication.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Modal } from "react-bootstrap";

export default function ViewDetails() {
  const { id } = useParams();
  const briefId = id;
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Load brief data
  const LoadData = async () => {
    const results = await axios.get(`http://localhost:8000/brief/${briefId}`);
    setData(results.data);
  };
  console.log(data);
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Brief Details</h1>

            <small>Dashboard / Brief Details / {data.BriefTitle}</small>
            <button onClick={handleShow} className="addBrief">
              Upload Proof
            </button>
          </div>

          <div className="page-content">
            <div style={{ width: "70%", marginLeft: "5%" }}>
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contactPerson">
                      Brief Title: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={data.BriefTitle}
                      name="BriefTitle"
                      required
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Court Station: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={data.CourtStation}
                      name="CourtStation"
                      required
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Location: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={data.Location}
                      name="Location"
                      required
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Brief Date: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="BriefDate"
                      value={data.BriefDate}
                      name="BriefDate"
                      required
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Case Number: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="CaseNumber"
                      value={data.CaseNumber}
                      name="CaseNumber"
                      required
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Cost: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Cost"
                      value={data.Cost}
                      name="Cost"
                      required
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Firm on record: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirmonRecord"
                      value={data.FirmonRecord}
                      name="FirmonRecord"
                      required
                      disabled
                    />
                  </div>
                </div>

                <div className="form-group col-lg-6">
                  <label htmlFor="inputState">
                    Stage of the matter:<span className="asterisc">*</span>
                  </label>
                  <select
                    required
                    disabled
                    className="form-control"
                    id="Stageofthematter"
                    value={data.Stageofthematter}
                    name="Stageofthematter"
                  >
                    <option selected> -- Select Type -- </option>
                    <option>Mention</option>
                    <option>Further Mention</option>
                    <option>Hearing</option>
                    <option>Further Hearing</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Instructions: <span className="asterisc">*</span>
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="Instructions"
                      value={data.Instructions}
                      name="Instructions"
                      // row= "14"
                      style={{ height: "150px" }}
                      disabled
                    />
                  </div>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* Modal for creating brief*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{ textAlign: "center", width: "100%", alignItems: "center" }}
          >
            <h6 style={{ fontSize: "20px" }}> Upload proof of completion</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <form className="row g-3">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="contactPerson">
                  Attach file: <span className="asterisc">*</span>
                </label>
                <br />
                <input type="file" className="form-control" required />
              </div>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#22BAA0",
                border: "0px solid #fff",
              }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
