import React, { useState } from "react";
import '../style/reports.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Chart } from "react-google-charts";
import { AiFillPrinter } from "react-icons/ai";

export default function ReportsScreen() {
  // Report data
  const options = {
    title: "Brief Analytics",
    hAxis: { titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "60%", height: "70%" },
  };
  const BriefNumbers = [
    ["Brief Status", "Brief",  { role: "style" }],
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
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Reports</h1>
            <small>Dashboard / Reports</small>

            <button className="ExportBtn">
              Export <AiFillPrinter style={{ fontSize: "18px" }} />
            </button>
          </div>

          <div className="page-content">
            <div style={{ overflowX: "auto" }}>
              <table width="100%">
                <thead>
                  <tr>
                    <th># Brief ID</th>
                    <th>
                      <span className="las la-sort"></span>Title
                    </th>
                    <th>
                      <span className="las la-sort"></span> Date
                    </th>
                    <th>
                      <span className="las la-sort"></span> Cost
                    </th>
                    <th>
                      <span className="las la-sort"></span> Location
                    </th>
                    <th>
                      <span className="las la-sort"></span> Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#003</td>
                    <td>
                      <div className="client">
                        <div className="client-info">
                          <small>Interlectual Property</small>
                        </div>
                      </div>
                    </td>
                    <td>24 January, 2023</td>
                    <td>Ksh. 15,000</td>
                    <td>Milimani Law Courts</td>
                    <td>
                      <span className="completeBtn">Complete</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#0027</td>
                    <td>
                      <div className="client">
                        <div className="client-info">
                          <small>Civil Case</small>
                        </div>
                      </div>
                    </td>
                    <td>28 January, 2023</td>
                    <td>Ksh. 26,000</td>
                    <td>Supreme court building</td>
                    <td>
                      <span className="activeBtn">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reports */}
            <br />
            <div className="card-header">
              <h4 className="card-titles">Briefs Analytics</h4>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="card card-table flex-fill">
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
        </main>
      </div>
    </div>
  );
}
