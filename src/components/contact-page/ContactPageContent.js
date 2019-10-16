import React from "react";
import {} from "./styled";

let isPreview;

export const ContactPageContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  console.log('pageContent: ', pageContent)

  return (
    <>
      <div>Hello from the ContactPageContent component</div>
    </>
  );
};