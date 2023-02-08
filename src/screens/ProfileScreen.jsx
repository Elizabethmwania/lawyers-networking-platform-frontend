import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/profile.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import profile from "../images/Profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Swal from "sweetalert2";

export default function ProfileScreen() {
  let navigate = useNavigate();
  const { id } = useParams();
 
  const [users, setUsers] = useState({
    email: "",
    Title: "",
    FirstName: "",
    LastName: "",
    UserName: "",
    PhoneNumber: "",
    Location: "",
    P105Number: "",
    AreaofPractice: "",
  });
  const [value, setValue] = useState();
  const {
    email,
    Title,
    FirstName,
    LastName,
    UserName,
    PhoneNumber,
    Location,
    P105Number,
    AreaofPractice,
  } = users;

  useEffect(() => {
    LoadUser();
  }, []);

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const SendToDb = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/users/update/${id}`, users);
    UpdateProfileSuccess();
  };
  // Load user details
  const LoadUser = async () => {
    const results = await axios.get(`http://localhost:8000/users/${id}`);
    setUsers(results.data);
  };

  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Profile</h1>
            <small>Dashboard / Profile</small>
          </div>

          <div className="page-content">
            <div className="row">
              <div className="col-md-4" style={{ textAlign: "center" }}>
                <img
                  src={profile}
                  alt="Profile Picture"
                  className="profilePic"
                />

                <div
                  style={{
                    width: "70%",
                    margin: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    textALign: "center",
                  }}
                >
                  <h6>Welcome {FirstName}</h6>
                  {/* <button className="changeProfile">Change Profile</button> */}
                </div>
              </div>
              <div className="col-md-8">
                <h5>Personal Information</h5>

                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="inputState" className="form-label">
                      Title
                    </label>
                    <select
                      id="Title"
                      className="form-select"
                      name="Title"
                      value={Title}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    >
                      <option>--Select Title--</option>
                      <option>Mrs</option>
                      <option>Mr</option>
                      <option>Dr</option>
                      <option>Hon</option>
                    </select>
                  </div>
                  <div className="col-6 ">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="FirstName"
                      required
                      value={FirstName}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="LastName"
                      required
                      value={LastName}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label>Username</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      name="UserName"
                      value={UserName}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <h5>Contact Information</h5>
                  <div className="col-6 ">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label>
                      Phone Number
                    </label>
                    <PhoneInput
                      id="phone-number"
                      international
                      dropdownStyle={{ borderRadius: "8px", height: "4em" }}
                      style={{ border: "0px solid white" }}
                      defaultCountry="KE"
                      className="form-control"
                      name="PhoneNumber"
                      value={value}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label>
                      Location
                    </label>
                    <select
                      className="form-control"
                      name="Location"
                      value={Location}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    >
                      <option selected>Nairobi</option>
                      <option value="1">Isiolo</option>
                      <option value="2">Mombasa</option>
                      <option value="3">Nakuru</option>
                      <option value="4">Eldoret</option>
                      <option value="5">Kisumu</option>
                    </select>
                  </div>

                  <h5>Background Information</h5>

                  <div className="col-6 ">
                    <label>P105 Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="P105 Number*"
                      name="P105Number"
                      value={P105Number}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label>Area of Practice</label>
                    <select
                      id="AreaofPractice"
                      className="form-control"
                      name="AreaofPractice"
                      value={AreaofPractice}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    >
                      <option>Criminal Law</option>
                      <option>Family Law</option>
                      <option>Civil Law</option>
                    </select>
                  </div>
                </form>
                <button
                  className="SaveDetails"
                  onClick={(e) => {
                    SendToDb(e);
                  }}
                >
                  Save Details
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const UpdateProfileSuccess = () => {
  Swal.fire({
    title: "User Profile",
    text: "Profile updated sucessfully!",
    icon: "success",
  });
};
