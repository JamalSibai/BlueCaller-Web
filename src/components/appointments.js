import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function Appointment(props) {
  const deleteFun = async () => {
    props.filterData(props.props.id);
    await axios
      .post(
        `https://bluecaller.tk/api/auth/delete-appointment`,
        {
          id: props.props.id,
        },
        {
          headers: {
            Authorization: " bearer" + localStorage.getItem("token"),
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    alert("Appointment removed successfuly");
  };

  return (
    <div className=" col-md-4">
      <div className="ts-pricing-box">
        <div className="ts-pricing-header">
          <h2 className="ts-pricing-name">{props.props.user[0].name}</h2>
        </div>
        <div className="ts-pricing-features">
          <ul className="list-unstyled">
            <li>Date: {props.props.date}</li>
            <li>PhoneNumber: +961 {props.props.user[0].phone}</li>
            <li>Email: {props.props.user[0].email}</li>
            <li>
              Reserved at:{" "}
              {JSON.stringify(props.props.updated_at).substring(1, 10)}
            </li>
          </ul>
        </div>

        <div className="plan-action">
          <a
            href={`https://maps.google.com/?q= ${props.props.latitude} ,${props.props.longitude}`}
            className="btn btn-dark"
          >
            location
          </a>
        </div>
        <div className="plan-action" onClick={deleteFun}>
          <div className="btn btn-primary">Delete</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
