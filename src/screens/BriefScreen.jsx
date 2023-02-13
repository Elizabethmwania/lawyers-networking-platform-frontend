import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/style.scss";
import "../style/brief.scss";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import { BiCurrentLocation } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
// Convert date and time to a more readable format
import Moment from "react-moment";

export default function BriefScreen() {
  const { id } = useParams();

  let navigate = useNavigate();

  const [data, setData] = useState([]);
  // Modal One
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal Two
  const AlreadyApplied = () => {
    alert("Already Applied, Thank You!");
  };
  // Add brief
  const [briefs, setBriefs] = useState({
    userId: id,
    BriefTitle: "",
    CourtStation: "",
    Cost: "",
    Location: "",
    CaseNumber: "",
    FirmonRecord: "",
    Stageofthematter: "",
    BriefDate: "",
    Instructions: "",
  });

  const {
    BriefTitle,
    CourtStation,
    Cost,
    Location,
    CaseNumber,
    FirmonRecord,
    Stageofthematter,
    BriefDate,
    Instructions,
  } = briefs;

  const onInputChange = (e) => {
    setBriefs({ ...briefs, [e.target.name]: e.target.value });
  };
  const [sending, setSending] = useState(false);
  const AddBrief = async (e) => {
    setSending(true);
    CreateBriefSucessMessage();
    handleClose();
    window.location.reload();
    e.preventDefault();
    await axios.post("http://localhost:8000/brief/", briefs);
  };

  const Applied = "False";

  // filter data
  const stage = [
    { label: "Stage", value: 0 },
    { label: "Mention", value: 1 },
    { label: "Further Mention", value: 2 },
    { label: "Hearing", value: 3 },
    { label: "Further Hearing", value: 4 },
  ];
  const location = [
    { label: "Location", value: 0 },
    { label: "Nairobi", value: 1 },
    { label: "Mombasa", value: 2 },
    { label: "Nakuru", value: 3 },
    { label: "Eldoret", value: 4 },
    { label: "Kisumu", value: 5 },
    { label: "Isiolo", value: 6 },
  ];
  const [loading, isLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(stage[0].value);
  const [selectedLocation, setSelectedLocation] = useState(location[0].value);
  const backendapi = "http://localhost:8000/brief/";

  const fetchData = () => {
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
    fetchData();
  }, []);
  // Filter based on stageofthematter
  const updateSelectedItem = (event) => {
    setData([]);
    setSelectedOption(event.target.value);
    // stageofthematter/Further%20Mention
    fetch(backendapi + `stageofthematter/${stage[event.target.value].label}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          isLoading(false);
        }, 1000);
        setData(data);
      });
  };
  // Filter based on Location
  const FilterbasedOnLocation = (event) => {
    setData([]);
    setSelectedLocation(event.target.value);
    fetch(backendapi + `location/${location[event.target.value].label}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          isLoading(false);
        }, 1000);
        setData(data);
      });
  };
  const [showNone, setShowNone] = useState(true);
  setTimeout(() => {
    setShowNone(false);
  }, 1400);

  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Briefs</h1>
            <small>Dashboard / All Briefs</small>
            <button onClick={handleShow} className="addBrief">
              Add brief
            </button>
          </div>

          <div className="page-content">
            <div className="records table-responsive">
              <div className="record-header">
                <div className="browse">
                  <select
                    name=""
                    id=""
                    style={{ width: "180px" }}
                    value={selectedOption}
                    onChange={(event) => updateSelectedItem(event)}
                  >
                    {stage.map((description) => (
                      <option key={description.value} value={description.value}>
                        {description.label}
                      </option>
                    ))}
                  </select>
                  <select
                    name=""
                    id=""
                    style={{ width: "120px" }}
                    value={selectedLocation}
                    onChange={(event) => FilterbasedOnLocation(event)}
                  >
                    {location.map((location) => (
                      <option key={location.value} value={location.value}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {loading == true ? (
              <div style={{ marginTop: "100px" }}>
                <center>
                  <PuffLoader color="#e1b772" />
                </center>
              </div>
            ) : (
              <>
                {data.length == 0 ? (
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      marginTop: "10%",
                    }}
                  >
                    {showNone == true ? "." : "No briefs"}
                  </p>
                ) : (
                  <div className="item">
                    {data.map((data) => (
                      <div className="item-con" data={data} key={data.id}>
                        <div className="item-container">
                          <h2 className="briefTitle">{data.BriefTitle} </h2>

                          <p className="timestamp">
                            ~ Brief date:
                            <Moment parse="YYYY-MM-DD HH:mm">
                              {data.BriefDate}
                            </Moment>
                          </p>
                          <p className="briefDescription">
                            {data.Instructions}
                          </p>
                          <p className="payment">Cost: Ksh.{data.Cost}</p>
                          <p className="moreInfo">
                            <strong>Stage of the matter</strong>:{" "}
                            {data.Stageofthematter}
                          </p>
                          <p className="moreInfo">
                            <strong>Court Station: </strong>:{" "}
                            {data.CourtStation}
                          </p>
                          <p className="location">
                            <BiCurrentLocation />
                            &nbsp;
                            {data.Location}
                          </p>
                          <button
                            className="ApplyBtn"
                            onClick={
                              Applied == "False"
                                ? () => {
                                    let path = `/application/${id}/${data.BriefId}`;
                                    navigate(path);
                                  }
                                : AlreadyApplied
                            }
                          >
                            {Applied == "True"
                              ? "Application Submitted"
                              : "Apply"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          {/* Modal for creating brief*/}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ textAlign: "center", width: "100%" }}>
                <h5>Create Brief</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body closeButton>
              <form
                className="row g-3"
                onSubmit={(e) => {
                  AddBrief(e);
                }}
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contactPerson">
                      Brief Title: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={BriefTitle}
                      name="BriefTitle"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Court Station: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={CourtStation}
                      name="CourtStation"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Location: <span className="asterisc">*</span>
                    </label>
                    <select
                      required
                      className="form-control"
                      id="Location"
                      value={Location}
                      name="Location"
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    >
                      <option selected="default">--Select Location--</option>
                      <option value="Nairobi">Nairobi</option>
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
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Brief Date: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="BriefDate"
                      value={BriefDate}
                      name="BriefDate"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Case Number: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="CaseNumber"
                      value={CaseNumber}
                      name="CaseNumber"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Cost: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Cost"
                      value={Cost}
                      name="Cost"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Firm on record: <span className="asterisc">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FirmonRecord"
                      value={FirmonRecord}
                      name="FirmonRecord"
                      required
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group col-lg-6">
                  <label htmlFor="inputState">
                    Stage of the matter:<span className="asterisc">*</span>
                  </label>
                  <select
                    required
                    className="form-control"
                    id="Stageofthematter"
                    value={Stageofthematter}
                    name="Stageofthematter"
                    onChange={(e) => {
                      onInputChange(e);
                    }}
                  >
                    <option selected> -- Select Type -- </option>
                    <option>Mention</option>
                    <option>Further Mention</option>
                    <option>Hearing</option>
                    <option>Further Hearing</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputZip">
                      Instructions: <span className="asterisc">*</span>
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="Instructions"
                      value={Instructions}
                      name="Instructions"
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                    />
                  </div>
                  <br />
                  <p style={{ fontSize: "14px" }}>
                    <strong>PS:</strong> After the admin has reviewed the brief
                    is when it will be available for the rest to view.
                  </p>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#9a6c20",
                    border: "0px solid #fff",
                  }}
                  className="btn btn-primary"
                >
                  {sending ? (
                    <ScaleLoader height="20" width="4" color="#fff" />
                  ) : (
                    "Create"
                  )}
                </button>
              </form>
            </Modal.Body>
          </Modal>
          {/* end of modal */}
        </main>
      </div>
    </div>
  );
}

const CreateBriefSucessMessage = () => {
  Swal.fire({
    title: "Create Brief",
    text: "Brief has been created sucessfully!",
    icon: "success",
  });
};
