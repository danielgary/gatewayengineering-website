import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import "./all.sass";
import HeaderContainer from "./header/HeaderContainer";

const TemplateWrapper = props => {
  console.log("props", props);
  return (
    <div>
      <Helmet />
      {/* <Navbar /> */}
      <HeaderContainer />
      <>{props.children}</>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
