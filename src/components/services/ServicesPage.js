import React from "react";
import { ServicesPageContent } from "./ServicesPageContent";

export const ServicesPage = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <ServicesPageContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};
