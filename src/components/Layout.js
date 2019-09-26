import React from "react";
import { Helmet } from "react-helmet";
// import Navbar from "../components/Navbar";
import "./all.sass";
import favicon from "../../static/img/gateway-engineering-mark.png";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";

const TemplateWrapper = props => {
  console.log("props", props);
  return (
    <>
      <Helmet
        link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      />
      <HeaderContainer />
      <>{props.children}</>
      <FooterContainer />
    </>
  );
};

export default TemplateWrapper;
