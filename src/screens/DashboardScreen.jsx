import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/dashboard.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Chart } from "react-google-charts";

import {
  MdLibraryBooks,
  MdAddTask,
  MdOutlinePendingActions,
} from "react-icons/md";
export default function DashboardScreen() {
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
  // Report data
  const options = {
    title: "Brief Analytics",
    hAxis: { titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "60%", height: "70%" },
  };
  const BriefNumbers = [
    ["Brief Status", "Number of Brief", { role: "style" }],
    ["Complete Briefs", 28, "#198754"],
    ["Active Briefs", 23, "#ffc107"],
    ["Payment Pending Briefs", 8, "#dc3545"],
  ];
  const BriefReport = [
    ["Brief Status", "Number of Briefs"],
    ["Complete Briefs", 12],
    ["Active Briefs", 12],
    ["Payment Pending Briefs", 12],
  ];
  return (
    <div className="main-content">
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />

      <main>
        <br /> <br />
        {/* <MainComponent /> */}
        <div className="BannerInfo" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "30px", color: "black" }}>
            {day}, {month} {date}
          </p>
          <h5 style={{ fontSize: "40px", color: "#22baa0" }}>
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
            , Jane
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
                      <h3>26</h3>
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
                      <h3>14</h3>
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
                      <h3>8</h3>
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
                      <h3>4</h3>
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
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={BriefReport}
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card  card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-titles">Briefs Analytics #2</h4>
                </div>
                <div className="card-body">
                  <Chart
                    chartType="BarChart"
                    width="80%"
                    height="400px"
                    data={BriefNumbers}
                    options={options}
                  />
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
