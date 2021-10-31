import React, { Component, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
function Home() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }
  }, []);

  return (
    <div>
      <Header />
      {/* //body of the HTML page */}
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
