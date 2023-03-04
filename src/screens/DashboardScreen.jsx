import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/dashboard.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Chart } from "react-google-charts";
import axios from "axios";
import Swal from "sweetalert2";

import {
  MdLibraryBooks,
  MdAddTask,
  MdOutlinePendingActions,
} from "react-icons/md";
function DashboardScreen() {
  const [data, setData] = useState([]);
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  // Fetch my briefs
  const { id } = useParams();
  const backendapi = `/api/brief/mybriefs/${id}`;
  const fetchmybriefs = () => {
    fetch(backendapi)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchmybriefs();
  }, []);
  // Fetch user details
  const [userDetails, setUserDetails] = useState([]);
  const userapi = `/api/users/${id}`;
  const fetchuserdetails = () => {
    fetch(userapi)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
      });
  };

  useEffect(() => {
    fetchuserdetails();
  }, []);
  // Report data
  const options = {
    title: "Brief Analytics",
    hAxis: { titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "60%", height: "70%" },
  };
  const CompleteBriefs = data.filter(
    (data) => data.BriefStatus === "Complete"
  ).length;
  const ActiveBriefs = data.filter(
    (data) => data.BriefStatus === "Active"
  ).length;
  const PendingPayment = data.filter(
    (data) => data.PaymentStatus === "Payment Pending"
  ).length;
  const BriefNumbers = [
    ["Brief Status", "Number of Brief", { role: "style" }],
    ["Complete Briefs", CompleteBriefs, "#198754"],
    ["Active Briefs", ActiveBriefs, "#ffc107"],
    ["Payment Pending Briefs", PendingPayment, "#dc3545"],
  ];
  const BriefReport = [
    ["Brief Status", "Number of Briefs"],
    ["Complete Briefs", CompleteBriefs],
    ["Active Briefs", ActiveBriefs],
    ["Payment Pending Briefs", PendingPayment],
  ];
  // Check if the user profile has null values
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/users/${id}`)
        .then((res) => {
          setUserProfile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  const isProfileIncomplete = Object.values(userProfile).some(
    (field) => field === ""
  );

  if (isProfileIncomplete) {
    setTimeout(() => {
      CompleteProfile();
    }, 1500);
  }

  return (
    <div className="main-content">
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />

      <main>
        <br /> <br />
        {/* <MainComponent /> */}
        <div className="BannerInfo" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "25px", color: "black" }}>
            {day}, {month} {date}
          </p>
          <h5 style={{ fontSize: "34px", color: "#e1b772" }}>
            {" "}
            {hour >= 12 ? (
              hour >= 16 ? (
                <>Good Evening</>
              ) : (
                <> Good Afternoon</>
              )
            ) : (
              <> Good Morning</>
            )}
            , {userDetails.FirstName}
          </h5>
        </div>
        <br />
        <div className="page-wrapper">
          {/* Start */}

          <div className="row" style={{ Width: "90%", margin: "auto" }}>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-primary border-primary">
                      <MdLibraryBooks />
                    </span>
                    <div className="dash-count">
                      <h3>{data.length}</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">All Briefs</h6>
                    <div className="progress progress-sm">
                      <div
                        className={`progress-bar bg-primary w-${
                          35 > 0 ? 25 : 0
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-success">
                      <MdAddTask />
                    </span>
                    <div className="dash-count">
                      <h3>{CompleteBriefs}</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Complete Briefs</h6>
                    <div className="progress progress-sm">
                      <div
                        className={`progress-bar bg-success w-${
                          12 > 0 ? 25 : 0
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-warning border-warning">
                      <MdOutlinePendingActions />
                    </span>
                    <div className="dash-count">
                      <h3>{ActiveBriefs}</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Active Briefs</h6>
                    <div className="progress progress-sm">
                      <div
                        className={`progress-bar bg-warning w-${
                          40 > 0 ? 25 : 0
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon text-danger border-danger">
                      <AiFillQuestionCircle />
                    </span>
                    <div className="dash-count">
                      <h3>{PendingPayment}</h3>
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h6 className="text-muted">Pending Payment</h6>
                    <div className="progress progress-sm">
                      <div
                        className={`progress-bar bg-danger w-${4 > 0 ? 25 : 0}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* Reports */}
          <div className="row">
            <div className="col-md-6">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-titles">Briefs Analytics #1</h4>
                </div>
                <div className="card-body">
                  {data == 0 ? (
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                       No brief analytics at the moment
                    </p>
                  ) : (
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="400px"
                      data={BriefReport}
                      options={options}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card  card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-titles">Briefs Analytics #2</h4>
                </div>
                <div className="card-body">
                {data == 0 ? (
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        marginTop: "10%",
                      }}
                    >
                      No brief analytics at the moment
                    </p>
                  ) : (
                    <Chart
                    chartType="BarChart"
                    width="80%"
                    height="400px"
                    data={BriefNumbers}
                    options={options}
                  />
                  )}
                
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </main>
    </div>
  );
}
const CompleteProfile = () => {
  Swal.fire("Complete Profile");
};

export default DashboardScreen;
