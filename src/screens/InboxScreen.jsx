import React, { useState, useEffect } from "react";
import Axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import '../style/inbox.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaTelegramPlane } from "react-icons/fa";
import PuffLoader from "react-spinners/PuffLoader";
import profile from "../images/Profile.png";

export default function InboxScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // get the email of the logged in user
  const { email } = useParams();
  const senderEmail = "J.Wangari63@gmail.com";
  // Post request for the message
  const [message, setMessage] = useState("");
  const sendRevisionRequest = () => {
    console.warn(senderEmail, message);
    const formData = new FormData();
    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    Axios.post("http://localhost:8000/inbox/", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch the messages
  useEffect(() => {
    if (senderEmail) {
      Axios.get(`http://localhost:8000/inbox/messages/${senderEmail}`)
        .then((res) => {
          setData(res.data);
          setTimeout(() => setLoading(true), 400);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [senderEmail]);
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <Sidebar />
      <Header />
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Inbox</h1>
            <small>Dashboard / Inbox</small>
          </div>

          <div className="page-content">
            {/* start of chatbody */}
            <div className="chatBody">
              <p className="chatDay">Today</p>

              {loading ? (
                <>
                  {/* card for sender */}
                  {data.map((data) => (
                    <>
                      {/* sender */}
                      <div className="recieverSection">
                        <img src={profile} alt="pic" className="profileImage" />
                        <div class="cardReciever">
                          <p>{data.message}</p>
                          <span style={{ color: "#ccc" }}>
                            <Moment date={data.timeSent} format="hh:mm" />
                          </span>
                        </div>
                      </div>
                      <br />
                      <br />
                      {/* reciever */}
                      <div className="senderSection">
                        <div class="cardSender">
                          <p>{data.response}</p>
                        </div>

                        <img src={profile} alt="pic" className="profileImage" />
                      </div>
                      <br /> <br />
                    </>
                  ))}
                </>
              ) : (
                <div style={{ marginLeft: "40%", marginTop: "3%" }}>
                  <PuffLoader color="#9a6c20" />
                </div>
              )}
              {/* card for receiver */}
            </div>
            {/* end of chatbody */}
            {/* Chat Footer */}
            <div className="chatFooter">
              {/* <form> */}
              <input
                type="text"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
                required
              />
              <button
                onClick={sendRevisionRequest}
                type="submit"
                className="messageBtn"
              >
                Send <FaTelegramPlane style={{ fontSize: "16px" }} />
              </button>

              {/* </form> */}
            </div>

            {/* Chat footer */}
          </div>
        </main>
      </div>
    </div>
  );
}
