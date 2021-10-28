import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 className="widget-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor inci done idunt ut labore et dolore magna
                  aliqua.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com/themefisher"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/themefisher"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/themefisher"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/themefisher"
                        aria-label="Github"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Footer social end --> */}
              </div>
              {/* <!-- Col end --> */}

              <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 className="widget-title">Working Hours</h3>
                <div className="working-hours">
                  Freelancers work 7 days a week, every day. Download the
                  BlueCaller App if you have an emergency.
                </div>
                <div className="working-hours">
                  Phone Number : +961 76630304
                </div>
                <div className="working-hours">
                  Email : office@BlueCaller.com
                </div>
              </div>
            </div>
            {/* <!-- Row end --> */}
          </div>
          {/* <!-- Container end --> */}
        </div>
        {/* <!-- Footer main end --> */}

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-info text-center text-md-left">
                  <span>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>,
                    Designed &amp; Developed by
                    <a href="https://themefisher.com">Themefisher</a>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Row end --> */}

            <div
              id="back-to-top"
              data-spy="affix"
              data-offset-top="10"
              className="back-to-top position-fixed"
            >
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up"></i>
              </button>
            </div>
          </div>
          {/* <!-- Container end --> */}
        </div>
        {/* <!-- Copyright end --> */}
      </footer>
    );
  }
}
export default Footer;
