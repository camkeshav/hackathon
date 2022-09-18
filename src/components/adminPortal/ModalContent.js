import React, { useState } from "react";
import "./admincontent.css"

const DUMMY_SLOTS = [
  {
    lowerLimit: 1,
    upperLimit: 2,
  },
  {
    lowerLimit: 2,
    upperLimit: 3,
  },
  {
    lowerLimit: 3,
    upperLimit: 4,
  },
  {
    lowerLimit: 4,
    upperLimit: 5,
  },
  {
    lowerLimit: 5,
    upperLimit: 6,
  },
  {
    lowerLimit: 6,
    upperLimit: 7,
  },
  {
    lowerLimit: 7,
    upperLimit: 8,
  },
  {
    lowerLimit: 8,
    upperLimit: 9,
  },
  {
    lowerLimit: 9,
    upperLimit: 10,
  },
  {
    lowerLimit: 10,
    upperLimit: 11,
  },
  {
    lowerLimit: 11,
    upperLimit: 12,
  },
];

const ModalContent = (props) => {
  const [meetings, setMeeting] = useState({
    appointmentName: "",
    appointmentDesc: "",
    meetingLink: "",
  });
  const [ll, setLL] = useState();
  const [ul, setUL] = useState();
  const [slots, setSlots] = useState(DUMMY_SLOTS);

  const [meridiem, setMeridiem] = useState("am");

  const handleModalSubmit = (event) => {
    event.preventDefault();
    props.handleClose();
    props.addMeeting(meetings, ll, ul, meridiem);
  };
  const setMeetingHandler = (event) => {
    setMeeting((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const removeTimeSlot = (ll, ul) => {
    setSlots((prev) => {
      return prev?.filter((slot, index) => {
        return slot.lowerLimit !== ll && slot.upperLimit !== ul;
      });
    });
  };

  //   const duration = [
  //     {
  //       duration: "30 min",
  //       onClick: () => {
  //         setMeetDuration(15);
  //         console.log("Clicked!!!!");
  //       },
  //     },
  //     {
  //       duration: "45 min",
  //       onClick: () => {
  //         setMeetDuration(45);
  //         console.log("Clicked!!!!");
  //       },
  //     },
  //     {
  //       duration: "60 min",
  //       onClick: () => {
  //         setMeetDuration(60);
  //         console.log("Clicked!!!!");
  //       },
  //     },
  //   ];

  const displaySlots = () => {
    return slots?.map((t, index) => (
      <div  key={index}>
        <span className="displayslot"
          onClick={() => {
            setLL(t.lowerLimit);
            setUL(t.upperLimit);
            removeTimeSlot(t.lowerLimit, t.upperLimit);
          }}
        >
          {t.lowerLimit}-{t.upperLimit}
        </span>
      </div>
    ));
  };

  return (
    <div>
      <form className="admincontent" onSubmit={handleModalSubmit}>
        <label  htmlFor="appointmentName">Appointment name</label>
        <input  className="contentinput"
          required
          value={meetings.appointmentName}
          name="appointmentName"
          onChange={setMeetingHandler}
          type="text"
        />
        <label value={meetings.appointmentDesc} htmlFor="description">
          Description
        </label>

        <input className="contentinput"
          required
          onChange={setMeetingHandler}
          name="appointmentDesc"
          type="text"
        />
        <label value={meetings.meetingLink} htmlFor="description">
          Link
        </label>

        <input className="contentinput"
          required
          onChange={setMeetingHandler}
          name="meetingLink"
          type="url"
        />
        <label htmlFor="duration">Appointment Duration</label>

        <div id="duration">
          {displaySlots()}
          <div>
            {meridiem}{" "}
            <span className="meridianam"
              onClick={() => {
                setMeridiem((prev) => (prev === "am" ? "pm" : "am"));
              }}
            >
              change
            </span>
          </div>
        </div>
        <div></div>
        <button className="addbtn" type="submit">Add</button>
      </form>
    </div>
  );
};

export default ModalContent;