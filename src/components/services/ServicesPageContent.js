import React from "react";
import Img from "gatsby-image";

let isPreview;

export const renderServices = servicesList => {
  return servicesList.map((item, i) => {
    const serviceImage = isPreview
      ? item.serviceImage
      : item.serviceImage.childImageSharp.fluid;
    return (
      <div key={i}>
        <div>{item.serviceDescription}</div>
        <div>{item.serviceName}</div>
        {isPreview ? (
          <img src={serviceImage} alt={`${item.serviceName}`} />
        ) : (
          <Img fluid={serviceImage} alt={`${item.serviceName}`} />
        )}
      </div>
    );
  });
};

export const ServicesPageContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const { servicesList } = pageContent;
  return (
    <>
      <div>{pageContent.servicesHeader}</div>
      <div>{pageContent.salesPitch}</div>
      <div>{renderServices(servicesList)}</div>
    </>
  );
};
