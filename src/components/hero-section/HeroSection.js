import React from "react";
import { HeroSectionContent } from "./HeroSectionContent";

export const HeroSection = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <HeroSectionContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};