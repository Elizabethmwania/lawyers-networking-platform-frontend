import React, { useState } from "react";
import '../style/reports.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiFillPrinter } from "react-icons/ai";

export default function MyBriefs() {
  const id = 22;
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
                    <th>
                      <span className="las la-sort"></span> Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#054</td>
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
                      <a href={`ViewDetails/${id}`} className="moreInfoBtn">
                        View Details
                      </a>
                    </td>
                    <td>
                      <span className="activeBtn">Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#016</td>
                    <td>
                      <div className="client">
                        <div className="client-info">
                          <small>Interlectual Property</small>
                        </div>
                      </div>
                    </td>
                    <td>18 January, 2023</td>
                    <td>Ksh. 15,000</td>
                    <td>Milimani Law Courts</td>
                    <td>
                      <a href={`ViewDetails/${id}`} className="moreInfoBtn">
                        View Details
                      </a>
                    </td>
                    <td>
                      <span className="completeBtn">Complete</span>
                    </td>
                  </tr>
                  <tr>
                    <td>#003</td>
                    <td>
                      <div className="client">
                        <div className="client-info">
                          <small>Interlectual Property</small>
                        </div>
                      </div>
                    </td>
                    <td>14 January, 2023</td>
                    <td>Ksh. 18,000</td>
                    <td>Milimani Law Courts</td>
                    <td>
                      <a href={`ViewDetails/${id}`} className="moreInfoBtn">
                        View Details
                      </a>
                    </td>
                    <td>
                      <span className="completeBtn">Complete</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
