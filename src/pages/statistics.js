// import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";

import AnalyticsHeader from "../components/analyticsheader";
import Footer from "../components/footer";
import SecondHeader from "../components/secondHeader";
import Appointment from "../components/appointments";

function Statistics() {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     getAppointments();
  //     if (!localStorage.getItem("freelancer_id")) {
  //       window.location.href = "/login";
  //     }
  //   }, []);

  //   const filterData = () => {
  //     const newData = data.filter((data) => data.id !== 32);
  //     setData(newData);
  //   };
  //   const getAppointments = async () => {
  //     await axios
  //       .post(
  //         `https://bluecaller.tk/api/auth/getfreelancerAppointments`,
  //         {
  //           freelancer_id: localStorage.getItem("freelancer_id"),
  //         },
  //         {
  //           headers: {
  //             Authorization: " bearer" + localStorage.getItem("token"),
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //         setData(res.data);
  //       });
  //   };

  return (
    <div>
      <AnalyticsHeader />
      <SecondHeader props={"Statistics"} />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="col-12">
            {/* <h2 className="section-title">Freelancers</h2> */}
            <h3 className="section-sub-title">Statistics</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Statistics;
