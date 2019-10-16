import React from "react";
import StylesheetInjector from "../global-themes/stylesheetInjector";
import { GlobalStyle } from "../global-themes/global";
import { ContactPageContainer } from "./ContactPageContainer";

export const ContactPageTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <ContactPageContainer content={content} />
    </StylesheetInjector>
  );
};

const ContactPageLayout = ({ data }) => {
  const contactPage = data;

  return <ContactPageTemplate content={contactPage} />;
};

export default ContactPageLayout;
