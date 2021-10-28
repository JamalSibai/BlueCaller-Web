import React, { Component } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* //body of the HTML page */}
        <Body />
        <Footer />
      </div>
    );
  }
}
export default Home;
