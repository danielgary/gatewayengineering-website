import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../static/img/gateway-engineering-mark.png";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import { GlobalStyle } from "./global-themes/global";

const TemplateWrapper = props => {
  return (
    <>
      <GlobalStyle />
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
