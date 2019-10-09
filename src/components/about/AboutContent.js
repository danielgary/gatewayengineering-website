import React from "react";
import showdown from "showdown";
import {
  AboutHeaderText,
  AboutSubText,
  AboutImageDiv,
  AboutBody,
  OuterAboutWrapper,
  InnerAboutWrapper
} from "./styled";
import Img from "gatsby-image";

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
  const aboutImage = isPreview
    ? pageContent.aboutImage
    : pageContent.aboutImage.childImageSharp.fluid;
  const aboutSectionData = converter.makeHtml(aboutSection);

  return (
    <>
      <OuterAboutWrapper>
        <InnerAboutWrapper>
          <AboutHeaderText>{pageContent.headerText}</AboutHeaderText>
          <AboutSubText>{pageContent.subText}</AboutSubText>
          <AboutImageDiv>
            {isPreview ? (
              <img src={aboutImage} alt="About" />
            ) : (
              <Img fluid={aboutImage} alt="About" />
            )}
          </AboutImageDiv>
          <AboutBody>{renderHTML(aboutSectionData)}</AboutBody>
        </InnerAboutWrapper>
      </OuterAboutWrapper>
    </>
  );
};
