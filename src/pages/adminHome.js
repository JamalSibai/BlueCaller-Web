import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/header";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import FreelancerCard from "../components/freelancerCard";

function AdminHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    getFreelancers();
    // console.log("token", token);
    // if (token == null) {
    //   window.location.href = "/login";
    // }
  }, []);

  const getFreelancers = async () => {
    await axios
      .get(`https://bluecaller.tk/api/auth/getallfreelancers`, {
        headers: {
          Authorization: " bearer" + localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data);
      });
  };

  return (
    <div>
      <Header />
      <SecondHeader props={"Admin"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div class="col-12">
            <h2 class="section-title">Freelancers</h2>
            <h3 class="section-sub-title">Find Freelancers Appointments</h3>
          </div>
          <div class="row">
            {data.map((item) => (
              <FreelancerCard props={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AdminHome;
