import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import bg1 from "../pic/bg1.jpg";
import bg2 from "../pic/bg2.jpg";
import bg3 from "../pic/bg3.jpg";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="body-inner">
          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: `url(${bg1})`,
            }}
          >
            <div className="slider-content">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-md-12 text-center">
                    <h2 className="slide-title" data-animation-in="slideInLeft">
                      excellence is our goal
                    </h2>
                    <h3
                      className="slide-sub-title"
                      data-animation-in="slideInRight"
                    >
                      Blue Caller Mobile App
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          >
            <div className="slider-content text-left">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-md-12">
                    <h3 className="slide-title" data-animation-in="fadeIn">
                      Your Choice is Simple
                    </h3>
                    <h3
                      className="slide-sub-title"
                      data-animation-in="slideInLeft"
                    >
                      {/* Your Choice is Simple */}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: `url(${bg3})`,
            }}
          >
            <div className="slider-content text-right">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-md-12">
                    <h2 className="slide-title" data-animation-in="slideInDown">
                      Meet Our Engineers
                    </h2>
                    <h3 className="slide-sub-title" data-animation-in="fadeIn">
                      {/* We believe sustainability */}
                    </h3>
                    <p
                      className="slider-description lead"
                      data-animation-in="slideInRight"
                    >
                      We will create opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="call-to-action-box no-padding">
          <div className="container">
            <div className="action-style-box">
              <div className="row align-items-center">
                <div className="col-md-8 text-center text-md-left">
                  <div className="call-to-action-text">
                    <h3 className="action-title">
                      We understand your needs for Blue Collar Workers
                    </h3>
                  </div>
                </div>
                <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                  <div className="call-to-action-btn">
                    <a className="btn btn-dark" href="#">
                      Download bluecaller
                    </a>
                  </div>
                </div>
                {/* <!-- col end --> */}
              </div>
              {/* <!-- row end --> */}
            </div>
            {/* <!-- Action style box --> */}
          </div>
          {/* <!-- Container end --> */}
        </section>
        <section id="ts-features" className="ts-features">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ts-intro">
                  <h2 className="into-title">About Us</h2>
                  <h3 className="into-sub-title">
                    We Provide a Marketplace for Freelancers
                  </h3>
                  <p>
                    BlueCaller Application Provides a marketplace based on
                    ratings and customers feedback, the app is ment to be an
                    push to the economic situation in lebanon. Both freelancers
                    and customers will meet there needs either by finding a job
                    or getting work done.
                  </p>
                </div>

                <div className="gap-20"></div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="ts-service-box">
                      <span className="ts-service-icon">
                        <i className="fas fa-trophy"></i>
                      </span>
                      <div className="ts-service-box-content">
                        <h3 className="service-box-title">
                          We've Rating Based Service
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="ts-service-box">
                      <span className="ts-service-icon">
                        <i className="fas fa-sliders-h"></i>
                      </span>
                      <div className="ts-service-box-content">
                        <h3 className="service-box-title">
                          We Build Connectons
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="ts-service-box">
                        <span className="ts-service-icon">
                          <i className="fas fa-thumbs-up"></i>
                        </span>
                        <div className="ts-service-box-content">
                          <h3 className="service-box-title">
                            Guided by Commitment
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="ts-service-box">
                        <span className="ts-service-icon">
                          <i className="fas fa-users"></i>
                        </span>
                        <div className="ts-service-box-content">
                          <h3 className="service-box-title">
                            A Team of Professionals
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <h3 className="into-sub-title">Our Values</h3>
                <p>
                  We expect to help freelancers to benefit from the app, while
                  providing a professional and high qaulity services.
                </p>

                <div
                  className="accordion accordion-group"
                  id="our-values-accordion"
                >
                  <div className="card">
                    <div
                      className="card-header p-0 bg-transparent"
                      id="headingOne"
                    >
                      <h2 className="mb-0">
                        <button
                          className="btn btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Safety
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#our-values-accordion"
                    >
                      <div className="card-body">
                        Both Freelancers and Customers are Commited by an
                        appointment date and place.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header p-0 bg-transparent"
                      id="headingTwo"
                    >
                      <h2 className="mb-0">
                        <button
                          className="btn btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Customer Service
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#our-values-accordion"
                    >
                      <div className="card-body">
                        We are available at all times via email and all working
                        hours via phone.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facts" className="facts-area dark-bg">
          <div className="container">
            <div className="facts-wrapper">
              <div className="row">
                <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0"></div>
                <div className="col-md-3 col-sm-6 ts-facts">
                  <div className="ts-facts-img">
                    <img
                      loading="lazy"
                      src="/assets/images/icon-image/fact1.png"
                      alt="facts-img"
                    />
                  </div>
                  <div className="ts-facts-content">
                    <h2 className="ts-facts-num">
                      <span className="counterUp" data-count="1789">
                        0
                      </span>
                    </h2>
                    <h3 className="ts-facts-title">Total Jobs Done</h3>
                  </div>
                </div>
                {/* <!-- Col end --> */}

                <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                  <div className="ts-facts-img">
                    <img
                      loading="lazy"
                      src="/assets/images/icon-image/fact2.png"
                      alt="facts-img"
                    />
                  </div>
                  <div className="ts-facts-content">
                    <h2 className="ts-facts-num">
                      <span className="counterUp" data-count="647">
                        0
                      </span>
                    </h2>
                    <h3 className="ts-facts-title">Freelancers </h3>
                  </div>
                </div>
                {/* <!-- Col end --> */}
              </div>
              {/* <!-- Facts end --> */}
            </div>
            {/* <!--/ Content row end --> */}
          </div>
          {/* <!--/ Container end --> */}
        </section>
      </div>
    );
  }
}
export default Body;
