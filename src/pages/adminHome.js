import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import FreelancerCard from "../components/freelancerCard";

function AdminHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("token"));
    getFreelancers();
    // console.log("token", token);
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
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

  function remove(idsent) {
    console.log("in adminHome" + idsent);
    const newdata = data.filter((requests) => requests.id != idsent);
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <AdminHeader />
      <SecondHeader props={"Admin"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="col-12">
            <h2 className="section-title">Freelancers</h2>
            <h3 className="section-sub-title">Find Freelancers Appointments</h3>
          </div>
          <div className="row">
            {data.map((item) => (
              <FreelancerCard props={item} key={item.id} function={remove} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AdminHome;
