import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AdminHeader() {
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
                </div>
              </nav>
            </div>
            {/* <!--/ Col end --> */}
          </div>
          {/* <!--/ Row end --> */}
        </div>
      </div>
      {/* <!--/ Navigation end --> */}
    </header>
  );
}

export default AdminHeader;
