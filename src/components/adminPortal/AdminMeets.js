import React from "react";
import "./adminmeets.css";

const AdminMeets = (props) => {
  const deleteAppointment = () => {
    props.onDelete(props.id);
  };

  return (
  <div>  <div className="allmeetings">
  <h3>Meeting name : {props.meetName}</h3>
  <p>Meeting Description : {props.meetDesc}</p>
  <p>meeting link : {`${props.meetlink}/${props.meetNo}`}</p>
  <span>
    Meeting Time : {props.ll}-{props.ul}
    {props.mm}
  </span>

</div>
  <button className="deletebtn" onClick={deleteAppointment}>Delete</button></div>
  );
};

export default AdminMeets;
