import React from "react";
import Img from "gatsby-image";
import {
  MainContentOuterDiv,
  MainContentInnerTopDiv,
  MainContentInnerBottomDiv,
  MainContentTextWrapper,
  MainContentHeaderText,
  MainContentSubText,
  ImageDiv,
  Service,
  ServiceTitle,
  ServiceDescription,
  ServiceImageDiv
} from "./styled";

let isPreview;

const renderServices = servicesOverview => {
  return servicesOverview.map((service, index) => {
    const serviceImage = isPreview
      ? service.serviceImage
      : service.serviceImage.childImageSharp.fluid;
    return (
      <Service key={index}>
        <ServiceTitle>{service.serviceTitle}</ServiceTitle>
        <ServiceImageDiv>
          {isPreview ? (
            <img src={service.serviceImage} alt="service" />
          ) : (
            <Img fluid={serviceImage} alt="service" />
          )}
        </ServiceImageDiv>
        <ServiceDescription>{service.serviceDescription}</ServiceDescription>
      </Service>
    );
  });
};

export const MainContentInformation = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  const { servicesOverview } = pageContent;

  const mainImage = isPreview
    ? pageContent.mainImage
    : pageContent.mainImage.childImageSharp.fluid;

  return (
    <MainContentOuterDiv style={{ marginTop: isPreview ? "150px" : undefined }}>
      <MainContentInnerTopDiv>
        <MainContentTextWrapper>
          <MainContentHeaderText>
            {pageContent.headerText}
          </MainContentHeaderText>
          <MainContentSubText>{pageContent.subText}</MainContentSubText>
        </MainContentTextWrapper>
        <ImageDiv>
          {isPreview ? (
            <img alt="Engineering" src={mainImage} />
          ) : (
            <Img fluid={mainImage} alt="Engineering" />
          )}
        </ImageDiv>
      </MainContentInnerTopDiv>
      <MainContentInnerBottomDiv>
        {renderServices(servicesOverview)}
      </MainContentInnerBottomDiv>
    </MainContentOuterDiv>
  );
};
