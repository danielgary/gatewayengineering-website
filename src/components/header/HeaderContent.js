import React from "react";
import {
  HeaderWrapper,
  ImageAndLinkWrapper,
  ImageWrapper,
  NavigationWrapper
} from "./styled";

let isPreview;

const renderNavigationLinks = navigationLinks => {
  return navigationLinks.map((link, index) => {
    return (
      <div key={index}>
        <a href={link.path}>{link.name}</a>
      </div>
    );
  });
};

export const HeaderContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;
  const pageContent = containsPreviewData
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const headerLogo = containsPreviewData
    ? content.headerLogo
    : pageContent.headerLogo.publicURL;
  const { navigationLinks } = pageContent;

  return (
    <>
      <HeaderWrapper>
        <ImageAndLinkWrapper>
          <ImageWrapper>
            <img src={headerLogo} alt="gatewayengineering logo" />
          </ImageWrapper>
          <NavigationWrapper>
            {renderNavigationLinks(navigationLinks)}
          </NavigationWrapper>
        </ImageAndLinkWrapper>
      </HeaderWrapper>
    </>
  );
};
