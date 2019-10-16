import React from "react";
import { ContactPageContent } from "./ContactPageContent";

export const ContactPage = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <ContactPageContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};