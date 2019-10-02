import React from "react";
import Img from "gatsby-image";
import {
  MainContentOuterDiv,
  MainContentInnerTopDiv,
  MainContentInnerBottomDiv,
  MainContentTextWrapper,
  MainContentHeaderText,
  MainContentSubText,
  ImageDiv
} from "./styled";

let isPreview;

const renderServices = servicesOverview => {
  return servicesOverview.map((service, index) => {
    return (
      <div key={index}>
        <div>{service.serviceTitle}</div>
        <div>{service.serviceDescription}</div>
      </div>
    );
  });
};

export const MainContentInformation = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  const { servicesOverview } = pageContent;

  const mainImage = pageContent.mainImage.childImageSharp.fluid;

  return (
    <MainContentOuterDiv>
      <MainContentInnerTopDiv>
        <MainContentTextWrapper>
          <MainContentHeaderText>
            {pageContent.headerText}
          </MainContentHeaderText>
          <MainContentSubText>{pageContent.subText}</MainContentSubText>
        </MainContentTextWrapper>
        <ImageDiv>
          <Img fluid={mainImage} alt="Engineering image" />
        </ImageDiv>
      </MainContentInnerTopDiv>
      <MainContentInnerBottomDiv>
        {renderServices(servicesOverview)}
      </MainContentInnerBottomDiv>
    </MainContentOuterDiv>
  );
};
