import React, { useState } from "react";
import Modal from "react-modal";
import AdminMeets from "./AdminMeets";
import ModalContent from "./ModalContent";
import "./adminmain.css";
const AdminMainPage = () => {
  const [open, setOpen] = useState(false);
  const [meetingsList, setMeetingsList] = useState([
    {
      m: {},
      ll: "",
      ul: "",
      mm: "",
    },
  ]);

  const addNewMeetingHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addMeeting = (m, ll, ul, mm) => {
    setMeetingsList((prev) => [...prev, { m: m, ll: ll, ul: ul, mm: mm }]);
  };

  const deleteMeeting = (id) => {
    setMeetingsList((prev) => {
      return prev.filter((meet, index) => {
        return index !== id;
      });
    });
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="adminbg">
      <div className="adminlink">
        <h2>Admin Link</h2>
        <p>https://www.admin.com</p>
        <button className="btnmeet" onClick={addNewMeetingHandler}>Add meeting</button>
      </div>
        <h1 className="meetingschedule">Your meetings</h1>
   
     <div className="wrapflex">
     {meetingsList?.map((meet, index) => (
        <AdminMeets
          id={index}
          key={index}
          meetName={meet.m.appointmentName}
          meetDesc={meet.m.appointmentDesc}
          meetlink={meet.m.meetingLink}
          meetNo={++index}
          ll={meet.ll}
          ul={meet.ul}
          mm={meet.mm}
          onDelete={deleteMeeting}
        />
      ))}
     </div>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContent addMeeting={addMeeting} handleClose={handleClose} />
        {/* <button onClick={handleClose}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default AdminMainPage;
