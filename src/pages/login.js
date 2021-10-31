import React, { Component, useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SecondHeaderlogin from "../components/secondHeaderlogin";
import LoginInputs from "../components/loginInputs";

function Login() {
  const [name, setName] = useState("Admin Login");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }
  }, []);

  return (
    <div>
      <Header />
      <SecondHeaderlogin props={name} />
      <LoginInputs />

      <Footer />
    </div>
  );
}
export default Login;
