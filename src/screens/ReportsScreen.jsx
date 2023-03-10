import React, { useState, useEffect } from "react";
import "../style/reports.scss";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Chart } from "react-google-charts";
import { AiFillPrinter } from "react-icons/ai";
// Convert date and time to a more readable format
import Moment from "react-moment";
// Export report
import * as XLSX from "xlsx";

import FileSaver from "file-saver";

export default function ReportsScreen() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // Fetch my briefs
  const backendapi = `/api/brief/mybriefs/${id}`;
  const fetchmybriefs = () => {
    fetch(backendapi)
      .then((response) => response.json())
      .then((data) => {
        const fieldsToExport = ["Cost", "CourtStation", "BriefTitle"];

        setData(data);
      });
  };

  useEffect(() => {
    fetchmybriefs();
  }, []);
  const filteredData = data.map(
    ({ BriefId, BriefTitle, Cost, CourtStation, BriefDate, BriefStatus }) => ({
      BriefId,
      BriefTitle,
      Cost,
      CourtStation,
      BriefDate,
      BriefStatus,
    })
  );
  // Export report in CSV Format
  const exportData = async () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    FileSaver.saveAs(dataBlob, "Brief Report.xlsx");
  };
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
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h3>Reports</h3>
            <small>Dashboard / Reports</small>

            <button className="ExportBtn" onClick={exportData}>
              Export <AiFillPrinter style={{ fontSize: "18px" }} />
            </button>
          </div>

          <div className="page-content">
            <div style={{ overflowX: "auto" }}>
              <table class="styled-table">
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
                      <span className="las la-sort"></span> Court Station
                    </th>
                    <th>
                      <span className="las la-sort"></span> Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.length == 0 ? (
                    <p
                      style={{
                        position: "sticky",
                        marginTop: "15%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "red",
                      }}
                    >
                      You have no briefs
                    </p>
                  ) : (
                    <>
                      {data.map((data) => (
                        <tr>
                          <td>{data.BriefId}</td>
                          <td>
                            <div className="client">
                              <div className="client-info">
                                <small>{data.BriefTitle}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            {" "}
                            <Moment
                              parse="YYYY-MM-DD HH:mm"
                              style={{ fontSize: "14px" }}
                            >
                              {data.BriefDate}
                            </Moment>
                          </td>
                          <td>Ksh. {data.Cost}</td>
                          <td> {data.CourtStation}</td>

                          <td>
                            {data.BriefStatus == "Complete" ? (
                              <span className="completeBtn">Complete</span>
                            ) : (
                              <span className="activeBtn">Active</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
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
