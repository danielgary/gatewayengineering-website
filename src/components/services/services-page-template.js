import React from "react";
import StylesheetInjector from "../../components/global-themes/stylesheetInjector";
import { GlobalStyle } from "../global-themes/global";
import { ServicesPageContainer } from "../../components/services/ServicesPageContainer";

export const ServicesPageTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <ServicesPageContainer content={content} />
    </StylesheetInjector>
  );
};

const ServicesPageLayout = ({ data }) => {
  const servicesPageData = data;

  return <ServicesPageTemplate content={servicesPageData} />;
};

export default ServicesPageLayout;
