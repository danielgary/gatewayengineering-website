import React from "react";
import showdown from "showdown";
import {
  AboutHeaderText,
  AboutSubText,
  AboutHeaderWrapper,
  AboutHeaderInnerWrapper,
  AboutBody,
  OuterAboutWrapper,
  InnerAboutWrapper
} from "./styled";

const converter = new showdown.Converter();
const HtmlToReactParser = require("html-to-react").Parser;

let isPreview;

const renderHTML = htmlInput => {
  const parser = new HtmlToReactParser();

  return parser.parse(htmlInput);
};

export const AboutContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const { aboutSection } = pageContent;
  const aboutSectionData = converter.makeHtml(aboutSection);

  return (
    <>
      <OuterAboutWrapper>
        <AboutHeaderWrapper>
          <AboutHeaderInnerWrapper>
            <AboutHeaderText>{pageContent.headerText}</AboutHeaderText>
            <AboutSubText>{pageContent.subText}</AboutSubText>
          </AboutHeaderInnerWrapper>
        </AboutHeaderWrapper>
        <InnerAboutWrapper>
          <AboutBody>{renderHTML(aboutSectionData)}</AboutBody>
        </InnerAboutWrapper>
      </OuterAboutWrapper>
    </>
  );
};
