import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Footer(props) {
  console.log(props.props.name);
  return (
    <div
      class="col-md-4 col-sm-6"
      onClick={() => console.log("clicked" + props.props.id)}
    >
      <div className="card">
        <div class="ts-service-box-bg text-center h-100 ">
          {/* <span class="ts-service-icon icon-round"> */}
          <img src={props.props.image} alt="Avatar" className="image" />
          {/* </span> */}
          <div class="ts-service-box-content">
            <h4>{props.props.name}</h4>
            <p>email: {props.props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
