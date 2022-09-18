import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { auth } from "../../config/firebase-config";
// import { uname } from "../auth/Login"
// import { JitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";
import { db } from "../../config/firebase-config";

function Video() {
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState("");
  const containerStyle = {
    width: "800px",
    height: "400px",
  };

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    let user = auth().currentUser;
    console.log(user);
    if (user) {
      console.log(db.collection("users").doc(user.uid));
      setUserName(db.collection("users").doc(user.uid));
    } else {
      alert("user not logged in");
    }
  }, []);

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: "roomName",
        height: 400,
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: false,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);
      //   api.addEventListener("videoConferenceJoined", () => {

      //   });
      console.log("Local User Joined");
      setLoading(false);
      api.executeCommand("displayName", `${username} Pareek`);
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, []);

  return (
    <div style={containerStyle}>
      {loading && <ProgressComponent />}
      <div id="jitsi-container" style={jitsiContainerStyle} />
    </div>
  );
}

export default Video;
