import React from "react";
import {
  HeaderWrapper,
  ImageAndLinkWrapper,
  ImageWrapper,
  NavigationWrapper,
  NavigationLink
} from "./styled";
import { Link } from "gatsby";

let isPreview;

const renderNavigationLinks = navigationLinks => {
  return navigationLinks.map((link, index) => {
    return (
      <NavigationLink key={index}>
        <Link to={link.path}>{link.name}</Link>
      </NavigationLink>
    );
  });
};

export const HeaderContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;
  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const headerLogo = isPreview
    ? content.headerLogo
    : pageContent.headerLogo.publicURL;
  const { navigationLinks } = pageContent;

  return (
    <>
      <HeaderWrapper>
        <ImageAndLinkWrapper>
          <Link to="/">
            <ImageWrapper>
              <img src={headerLogo} alt="gatewayengineering logo" />
            </ImageWrapper>
          </Link>
          <NavigationWrapper>
            {renderNavigationLinks(navigationLinks)}
          </NavigationWrapper>
        </ImageAndLinkWrapper>
      </HeaderWrapper>
    </>
  );
};

// Start mobile view at 780px
