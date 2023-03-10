import React, { useState, useEffect } from "react";
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

  // Get param details
  const { briefid } = useParams();
  const { id } = useParams();

  let navigate = useNavigate();

  // fetch application details
  useEffect(() => {
    if (briefid) {
      axios
        .get(`/api/brief/${briefid}`)
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
    await axios.post(`/api/applications/`, application);
    navigate(`/briefs/${id}`);
  };
  setTimeout(() => {
    setSending(false);
  }, 3000);
  // Confirm if application is present
  const [myapp, setMyapp] = useState([]);
  const fetchData = () => {
    fetch(`/api/applications/${briefid}`)
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
