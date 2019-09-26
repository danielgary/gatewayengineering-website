import React from "react";
import { FooterContent } from "./FooterContent";

export const Footer = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <FooterContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};
