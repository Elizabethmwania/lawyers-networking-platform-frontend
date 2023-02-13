import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/reports.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiFillPrinter } from "react-icons/ai";
import PuffLoader from "react-spinners/PuffLoader";
// Convert date and time to a more readable format
import Moment from "react-moment";

export default function MyBriefs() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  // Fetch my briefs
  const backendapi = `http://localhost:8000/brief/mybriefs/${id}`;
  const fetchmybriefs = () => {
    fetch(backendapi)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTimeout(() => {
          isLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchmybriefs();
  }, []);
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>My Briefs</h1>
            <small>Dashboard / Briefs</small>
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
                      <span className="las la-sort"></span> Location
                    </th>
                    <th>
                      <span className="las la-sort"></span> Status
                    </th>
                    <th>
                      <span className="las la-sort"></span> Action
                    </th>
                  </tr>
                </thead>

                {loading == true ? (
                  <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"  }}>
                    <center>
                      <PuffLoader color="#9a6c20"/>
                    </center>
                  </div>
                ) : (
                  <tbody>
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
                          <a
                            href={`/ViewDetails/${id}/${data.BriefId}`}
                            className="moreInfoBtn"
                          >
                            View Details
                          </a>
                        </td>
                        <td>
                          {data.BriefStatus == "Complete" ? (
                            <span className="completeBtn">Complete</span>
                          ) : (
                            <span className="activeBtn">Active</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
