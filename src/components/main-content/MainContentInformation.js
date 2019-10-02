import React from "react";
import Img from "gatsby-image";
import {} from "./styled";

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
    <>
      <div>
        <div>
          <h2>{pageContent.headerText}</h2>
          <p>{pageContent.subText}</p>
        </div>
        <Img fluid={mainImage} alt="Engineering image" />
        {renderServices(servicesOverview)}
      </div>
    </>
  );
};
