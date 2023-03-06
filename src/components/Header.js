import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import profile from "../images/Profile.png";

export default function Header() {
  // Check if the user profile has null values
  const [userProfile, setUserProfile] = useState({});
  const { id } = useParams();
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

  return (
    <header>
      <div className="header-content">
        <label htmlFor="menu-toggle">
          <span className="las la-bars">
            <AiOutlineMenuUnfold className="AiOutlineMenuUnfold" />
          </span>
        </label>

        <div className="header-menu">
          <label htmlFor="">
            <span className="las la-search">
              <BsSearch />
            </span>
          </label>

          {/* Notification */}
          <div className="notify-icon">
            <div class="dropdowns">
              <span>
                <IoMdNotifications
                  style={{ marginTop: "10px", fontSize: "26px" }}
                />
              </span>
              <span className="notify"> {isProfileIncomplete ? 1 : 0}</span>
              <div
                class="dropdowns-content"
                style={{
                  width: "130px",
                  padding: "12px 16px",
                  marginLeft: "-30px",
                }}
              >
                {isProfileIncomplete ? (
                  <p style={{ fontSize: "13px" }}>Complete Profile</p>
                ) : (
                  <p style={{ fontSize: "13px" }}>No messages</p>
                )}
              </div>
            </div>
          </div>
          {/* End of notification */}

          {/* Profile */}
          <div className="user">
            <div class="dropdowns">
              <img src={profile} className="bg-img" />
              <AiFillCaretDown />
              <div
                class="dropdowns-content"
                style={{ marginTop: "-25px", width: "80px" }}
              >
              
                <a href={`/profile/${id}`}>Settings</a>
                <a href="/">Log Out</a>
              </div>
            </div>
          </div>
          {/* End of profile */}
        </div>
      </div>
    </header>
  );
}
