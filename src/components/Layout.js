import React from "react";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
import { GlobalStyle } from "./global-themes/global";
import SEO from "./SiteMetadata";

const TemplateWrapper = props => {
  console.log(props);
  return (
    <>
      <GlobalStyle />
      <SEO title={`${props.title} | Gateway Engineering`} />
      <HeaderContainer />
      <>{props.children}</>
      <FooterContainer />
    </>
  );
};

export default TemplateWrapper;
