import React, { useState } from "react";
import Modal from "react-modal";
import AdminMeets from "./AdminMeets";
import ModalContent from "./ModalContent";

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
    <div>
      <div>
        <h2>Admin Link</h2>
        <p>https://www.admin.com</p>
      </div>
      <div>
        <h1>Your meetings</h1>
        <button onClick={addNewMeetingHandler}>Add meeting</button>
      </div>
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
