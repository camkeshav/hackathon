import React from "react";

const AdminMeets = (props) => {
  const deleteAppointment = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <h3>Meeting name : {props.meetName}</h3>
      <p>Meeting Description : {props.meetDesc}</p>
      <p>meeting link : {`${props.meetlink}/${props.meetNo}`}</p>
      <span>
        Meeting Time : {props.ll}-{props.ul}
        {props.mm}
      </span>
      <button onClick={deleteAppointment}>Delete</button>
    </div>
  );
};

export default AdminMeets;
