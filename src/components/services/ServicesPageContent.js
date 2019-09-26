import React from "react";

let isPreview;

export const ServicesPageContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  return <>Inside ServicePageContent</>;
};
