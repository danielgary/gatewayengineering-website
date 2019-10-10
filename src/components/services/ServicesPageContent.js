import React, { useState } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  ServiceImageWrapper,
  ServicesOuterWrapper,
  ServicesInnerWrapper,
  ServicesHeaderInnerWrapper,
  ServicesHeaderDiv,
  ServicesHeader,
  ServicesSalesPitch,
  ServicesList,
  ServiceWrapper,
  ContactButton,
  ServiceName,
  ServiceDescription,
  IconSpan,
  ServiceNameAndIcon,
  ServiceMainContent
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

let isPreview;

const serviceShouldCollapse = (isCollapsed, index, updateIsCollapsed) => {
  let sections = isCollapsed.map(i => {
    if (i.index === index) {
      i.collapsed = !i.collapsed;
    }
    return i;
  });
  updateIsCollapsed(sections);
};

export const renderServices = (
  servicesList,
  isCollapsed,
  updateIsCollapsed
) => {
  return servicesList.map((item, index) => {
    let serviceIsCollapsed = isCollapsed.find(i => i.index === index).collapsed;
    const serviceImage = isPreview
      ? item.serviceImage
      : item.serviceImage.childImageSharp.fluid;
    return (
      <ServiceWrapper key={index}>
        <ServiceNameAndIcon data-collapsed={serviceIsCollapsed}>
          <ServiceName>{item.serviceName}</ServiceName>
          <IconSpan
            data-collapsed={serviceIsCollapsed}
            onClick={() => {
              serviceShouldCollapse(isCollapsed, index, updateIsCollapsed);
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </IconSpan>
        </ServiceNameAndIcon>
        <ServiceMainContent data-collapsed={serviceIsCollapsed}>
          <ServiceImageWrapper>
            {isPreview ? (
              <img src={serviceImage} alt={`${item.serviceName}`} />
            ) : (
              <Img fluid={serviceImage} alt={`${item.serviceName}`} />
            )}
          </ServiceImageWrapper>
          <ServiceDescription>{item.serviceDescription}</ServiceDescription>
        </ServiceMainContent>
      </ServiceWrapper>
    );
  });
};

export const ServicesPageContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const { servicesList } = pageContent;

  const sections = servicesList.map((service, i) => {
    return { index: i, collapsed: false };
  });
  const [isCollapsed, updateIsCollapsed] = useState(sections);

  return (
    <ServicesOuterWrapper>
      <ServicesHeaderInnerWrapper>
        <ServicesHeaderDiv>
          <ServicesHeader>{pageContent.servicesHeader}</ServicesHeader>
          <ServicesSalesPitch>{pageContent.salesPitch}</ServicesSalesPitch>
          <Link to="/contact">
            <ContactButton>Contact Us</ContactButton>
          </Link>
        </ServicesHeaderDiv>
      </ServicesHeaderInnerWrapper>
      <ServicesInnerWrapper>
        <ServicesList>
          {renderServices(servicesList, isCollapsed, updateIsCollapsed)}
        </ServicesList>
      </ServicesInnerWrapper>
    </ServicesOuterWrapper>
  );
};
