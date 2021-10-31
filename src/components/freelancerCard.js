import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function Footer(props) {
  const ontouch = () => {
    localStorage.setItem("freelancer_id", props.props.id);
    window.location.href = "/freelancerAppointment";
  };
  const ondelete = async () => {
    props.function(props.props.id);
    await axios
      .post(
        `https://bluecaller.tk/api/auth/remove-freelancer`,
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
    alert("Freelancer removed successfuly");
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <div className="delete" onClick={ondelete}>
          <h2 className="deletetxt">Remove</h2>
        </div>
        <div className="ts-service-box-bg text-center h-100 " onClick={ontouch}>
          <img src={props.props.image} alt="Avatar" className="image" />
          <div className="ts-service-box-content">
            <h4>{props.props.name}</h4>
            <p>email: {props.props.email}</p>
            <p>Phone: +961 {props.props.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
