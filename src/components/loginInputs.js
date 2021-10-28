import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function LoginInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (email) => {
    setEmail(email.target.value);
  };
  const PasswordChange = (password) => {
    setPassword(password.target.value);
  };

  const login = async () => {
    if (email == "") {
      return alert("Enter Email");
    }
    if (password == "") {
      return alert("Enter Password");
    }
    try {
      axios
        .post(`https://bluecaller.tk/api/auth/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("res");
          console.log(res.data.access_token);
          localStorage.setItem("token", res.data.access_token);
          window.location.href = "/adminHome";
        });
    } catch (err) {
      alert("Wrong Email or Password!");
      console.log(err);
    }
  };

  return (
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <h3 className="column-title">Admin</h3> */}
            <div id="contact-form">
              <div className="error-container"></div>
              <div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control form-control-email"
                      name="email"
                      id="email"
                      placeholder=""
                      type="email"
                      required=""
                      onChange={emailChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>password</label>
                    <input
                      className="form-control form-control-name"
                      name="password"
                      id="password"
                      placeholder=""
                      type="password"
                      required=""
                      onChange={PasswordChange}
                    />
                  </div>
                  <div className="text-right">
                    <button
                      className="btn btn-primary solid blank"
                      //   type="submit"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginInputs;
