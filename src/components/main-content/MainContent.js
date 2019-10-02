import React from "react";
import { MainContentInformation } from "./MainContentInformation";

export const MainContent = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <MainContentInformation
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};
