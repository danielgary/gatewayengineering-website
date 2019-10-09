import React, { useContext } from "react";
// import showdown from "showdown";
import {} from "./styled";

// const converter = new showdown.Converter();
// const HtmlToReactParser = require("html-to-react").Parser;

let isPreview;

// const renderHTML = htmlInput => {
//   const parser = new HtmlToReactParser();

//   return parser.parse(htmlInput);
// };

export const AboutContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  //   const { aboutSection, contactSection } = isPreview
  //     ? pageContent.body
  //     : pageContent;
  //   const aboutSectionData = converter.makeHtml(aboutSection);
  //   const contactSectionData = converter.makeHtml(contactSection);

  return (
    <>
      <div>Hello this is the about content component</div>
    </>
  );
};
