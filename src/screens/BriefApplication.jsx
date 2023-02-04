import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../style/BriefApplication.scss'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ScaleLoader from "react-spinners/ScaleLoader";
// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BriefApplication() {
  const [data, setData] = useState([]);
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(false);
  // get the email of the logged in user
  const { email } = useParams();
  const applicantId = "1";
  const { id } = useParams();
  const briefid = id;
  let navigate = useNavigate();

  // toast notification
  const ApplicationNotification = () =>
    toast.success("Application Sent!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
    BriefId: id,
    ApplicantId: applicantId,
    CurrentLocation: "",
    Availability: "",
  });

  const { BriefId, ApplicantId, CurrentLocation, Availability } = application;

  const onApplicationInputChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const submitApplication = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/applications/", application);
    setSending(true);
    ApplicationNotification();
    setApplication("");
    navigate("/briefs");
  };

  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Brief Application</h1>
            <small>Dashboard / Application form / {data.BriefTitle} </small>
          </div>

          <div className="page-content">
            <div style={{ width: "60%" }}>
              <form className="row g-3">
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
                    Are you available on(January 25 between 1400hrs to 1600hrs):
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

                <button
                  style={{
                    backgroundColor: "#9a6c20",
                    border: "0px solid #fff",
                  }}
                  className="btn btn-primary"
                  onClick={(e) => {
                    submitApplication(e);
                  }}
                >
                  {sending == true ? (
                    <ScaleLoader height="20" width="3" color="#fff" />
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
