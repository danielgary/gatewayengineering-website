import React from "react";
import { AboutContent } from "./AboutContent";

export const About = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <AboutContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};
