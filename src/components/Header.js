import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import profile from "../images/Profile.png";

export default function Header() {
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
              <span className="notify">0</span>
              <div class="dropdowns-content" style={{width: "130px", padding: "12px 16px", marginLeft: "-30px"}}>
               <p>No messages</p>
              </div>
            </div>
          </div>
          {/* End of notification */}

          {/* Profile */}
          <div className="user">
            <div class="dropdowns">
              <img src={profile} className="bg-img" />
              <AiFillCaretDown />
              <div class="dropdowns-content" style={{marginTop: "-25px", width: "80px"}}>
                <a href="/profile">Settings</a>
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
