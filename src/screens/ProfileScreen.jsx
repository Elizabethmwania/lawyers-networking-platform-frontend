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
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      type="number"
                      required
                      name="PhoneNumber"
                      value={PhoneNumber}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label>Location</label>
                    <select
                      className="form-control"
                      name="Location"
                      value={Location}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    >
                      <option selected>Nairobi</option>

                      <option value="Baringo">Baringo</option>
                      <option value="Bomet">Bomet</option>
                      <option value="Bungoma">Bungoma</option>
                      <option value="Busia">Busia</option>
                      <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
                      <option value="Embu">Embu</option>
                      <option value="Garissa">Garissa</option>
                      <option value="Homa Bay">Homa Bay</option>
                      <option value="Isiolo">Isiolo</option>
                      <option value="Kajiado">Kajiado</option>
                      <option value="Kakamega">Kakamega</option>
                      <option value="Kericho">Kericho</option>
                      <option value="Kiambu">Kiambu</option>
                      <option value="Kilifi">Kilifi</option>
                      <option value="Kirinyaga">Kirinyaga</option>
                      <option value="Kisii">Kisii</option>
                      <option value="Kisumu">Kisumu</option>
                      <option value="Kitui">Kitui</option>
                      <option value="Kwale">Kwale</option>
                      <option value="Laikipia">Laikipia</option>
                      <option value="Lamu">Lamu</option>
                      <option value="Machakos">Machakos</option>
                      <option value="Makueni">Makueni</option>
                      <option value="Mandera">Mandera</option>
                      <option value="Marsabit">Marsabit</option>
                      <option value="Meru">Meru</option>
                      <option value="Migori">Migori</option>
                      <option value="Mombasa">Mombasa</option>
                      <option value="Muranga">Murang'a</option>
                      <option value="Nairobi City">Nairobi City</option>
                      <option value="Nakuru">Nakuru</option>
                      <option value="Nandi">Nandi</option>
                      <option value="Narok">Narok</option>
                      <option value="Nyamira">Nyamira</option>
                      <option value="Nyandarua">Nyandarua</option>
                      <option value="Nyeri">Nyeri</option>
                      <option value="Samburu">Samburu</option>
                      <option value="Siaya">Siaya</option>
                      <option value="Taita-Taveta">Taita-Taveta</option>
                      <option value="Tana River">Tana River</option>
                      <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                      <option value="Trans Nzoia">Trans Nzoia</option>
                      <option value="Turkana">Turkana</option>
                      <option value="Uasin Gishu">Uasin Gishu</option>
                      <option value="Vihiga">Vihiga</option>
                      <option value="West Pokot">West Pokot</option>
                      <option value="wajir">wajir</option>
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
