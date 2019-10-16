import React from "react";
import StylesheetInjector from "../../components/global-themes/stylesheetInjector";
import { ContactPageContainer } from "../../components/contact-page/ContactPageContainer";

export const ContactPageTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <ContactPageContainer content={content} />
    </StylesheetInjector>
  );
};

const ContactPageLayout = ({ data }) => {
  const contactPage = data;

  return <ContactPageTemplate content={contactPage} />;
};

export default ContactPageLayout;
