import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/BriefApplication.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

export default function ViewDetails() {
  const { id } = useParams();
  const { dataId } = useParams();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Upload the completion proof
  const [BriefTitle, setBriefTitle] = useState("");
  const [CourtStation, setCourtStation] = useState("");
  const [Cost, setCost] = useState("");
  const [Location, setLocation] = useState("");
  const [CaseNumber, setCaseNumber] = useState("");
  const [Stageofthematter, setStageofthematter] = useState("");
  const [FirmonRecord, setFirmonRecord] = useState("");
  const [BriefDate, setBriefDate] = useState("");
  const [Instructions, setInstructions] = useState("");
  const [CompletionProof, setCompletionProof] = useState(null);

  // fetch brief details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/brief/${dataId}`);
        const result = await response.json();
        setBriefTitle(result.BriefTitle);
        setCourtStation(result.CourtStation);
        setCost(result.Cost);
        setLocation(result.Location);
        setCaseNumber(result.CaseNumber);
        setStageofthematter(result.Stageofthematter);
        setFirmonRecord(result.FirmonRecord);
        setBriefDate(result.BriefDate);
        setInstructions(result.Instructions);
        setCompletionProof(result.CompletionProof);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    UploadCompletionProofSuccess();
    handleClose();
    const formData = new FormData();
    formData.append("BriefTitle", BriefTitle);
    formData.append("CourtStation", CourtStation);
    formData.append("Cost", Cost);
    formData.append("Location", Location);
    formData.append("CaseNumber", CaseNumber);
    formData.append("FirmonRecord", FirmonRecord);
    formData.append("Stageofthematter", Stageofthematter);
    formData.append("BriefDate", BriefDate);
    formData.append("Instructions", Instructions);
    formData.append("CompletionProof", CompletionProof);

    try {
      const response = await fetch(
        `http://localhost:8000/brief/update/${dataId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Brief Details</h1>

            <small>Dashboard / Brief Details / {BriefTitle}</small>
            <button
              onClick={
                CompletionProof != null
                  ? CompletionProofAlreadySubmitted
                  : handleShow
              }
              className="addBrief"
            >
              Upload Proof
            </button>
          </div>

          <div className="page-content">
            <div style={{ width: "70%", marginLeft: "5%" }}>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contactPerson">
                      Brief Title: <span className="asterisc">*</span>
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={BriefTitle}
                      name="BriefTitle"
                      required
                      disabled
                      onChange={(event) => setBriefTitle(event.target.value)}
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
                      value={CourtStation}
                      name="CourtStation"
                      required
                      disabled
                      onChange={(event) => setCourtStation(event.target.value)}
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
                      value={Location}
                      name="Location"
                      required
                      disabled
                      onChange={(event) => setLocation(event.target.value)}
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
                      value={BriefDate}
                      name="BriefDate"
                      required
                      disabled
                      onChange={(event) => setBriefDate(event.target.value)}
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
                      value={CaseNumber}
                      name="CaseNumber"
                      required
                      disabled
                      onChange={(event) => setCaseNumber(event.target.value)}
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
                      value={Cost}
                      name="Cost"
                      required
                      disabled
                      onChange={(event) => setCost(event.target.value)}
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
                      value={FirmonRecord}
                      name="FirmonRecord"
                      required
                      disabled
                      onChange={(event) => setFirmonRecord(event.target.value)}
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
                    value={Stageofthematter}
                    onChange={(event) =>
                      setStageofthematter(event.target.value)
                    }
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
                      value={Instructions}
                      name="Instructions"
                      // row= "14"
                      style={{ height: "150px" }}
                      disabled
                      onChange={(event) => setInstructions(event.target.value)}
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
            <h6 style={{ fontSize: "20px" }}> Upload Completion Proof</h6>
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

                <input
                  type="file"
                  className="form-control"
                  name="setCompletionProof"
                  onChange={(event) =>
                    setCompletionProof(event.target.files[0])
                  }
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#e1b772",
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
const UploadCompletionProofSuccess = () => {
  Swal.fire({
    title: "Submitted Sucessfully!",
    text: "Welcome!",
    icon: "success",
  });
};

const CompletionProofAlreadySubmitted = () => {
  Swal.fire("Completion Proof Already Submitted");
};
