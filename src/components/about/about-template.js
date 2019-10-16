import React from "react";
import StylesheetInjector from "../../components/global-themes/stylesheetInjector";
import { GlobalStyle } from "../global-themes/global";
import { AboutContainer } from "../../components/about/AboutContainer";

export const AboutTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <AboutContainer content={content} />
    </StylesheetInjector>
  );
};

const AboutLayout = ({ data }) => {
  const about = data;

  return <AboutTemplate content={about} />;
};

export default AboutLayout;
