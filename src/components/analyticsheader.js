import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AnalyticsHeader() {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <header id="header" className="header-one">
      <div className="site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item dropdown active">
                      <a
                        href="/"
                        className="nav-link dropdown-toggle"
                        // data-toggle="dropdown"
                      >
                        Blue Caller
                      </a>
                    </li>
                  </ul>
                  {/* <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active"></li>
                    </ul>
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active">
                        
                      </li>
                    </ul> */}
                </div>
              </nav>
            </div>
            {/* <!--/ Col end --> */}
          </div>
          {/* <!--/ Row end --> */}
          <div className="nav-search">
            <a href="/adminHome" className="nav navbar-nav mr-auto">
              Home
            </a>
          </div>
        </div>
        <div className="nav-search">
          <a href="/login" className="nav navbar-nav mr-auto">
            logout
          </a>
        </div>
      </div>
      {/* <!--/ Navigation end --> */}
    </header>
  );
}

export default AnalyticsHeader;
