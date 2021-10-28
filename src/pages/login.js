import React, { Component, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import LoginInputs from "../components/loginInputs";

function Login() {
  const [name, setName] = useState("Admin Login");

  return (
    <div>
      <Header />
      <SecondHeader props={name} />
      <LoginInputs />
      <Footer />
    </div>
  );
}
export default Login;
