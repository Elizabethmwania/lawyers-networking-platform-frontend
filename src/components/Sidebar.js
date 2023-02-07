import React from "react";
import { useParams } from "react-router-dom";
import { BsPower } from "react-icons/bs";
import { FaHome, FaUserTie } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import logo from "../images/Logos.png";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { id } = useParams();
  return (
    <div className="sidebar">
      <div className="side-header">
        <img src={logo} alt="logo" style={{ height: "70px", width: "70px" }} />
      </div>

      <div className="side-content">
        <div className="profile"></div>

        <div className="side-menu">
          <ul>
            <li>
              <NavLink to={`/dashboard/${id}`}>
                <FaHome className="sidebarIcon" />
                <small>Dashboard</small>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/briefs/${id}`}>
                <MdOutlineWork className="sidebarIcon" />
                <small>Briefs</small>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/mybriefs/${id}`}>
                <GoListUnordered className="sidebarIcon" />
                <small>My Briefs</small>
              </NavLink>
            </li>

            <li>
              <NavLink to={`/reports/${id}`}>
                <VscGraph className="sidebarIcon" />
                <small>Reports</small>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/inbox/${id}`}>
                <AiFillMessage className="sidebarIcon" />
                <small>Inbox</small>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/profile/${id}`}>
                <FaUserTie className="sidebarIcon" />
                <small>Profile</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <BsPower className="sidebarIcon" />
                <small>Log Out</small>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
