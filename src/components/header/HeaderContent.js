import React from "react";
import {
  HeaderWrapper,
  HeaderOuterWrapper,
  ImageAndLinkWrapper,
  ImageWrapper,
  NavigationWrapper,
  NavigationLink,
  NavigationMenuToggle
} from "./styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

export const HeaderContent = ({
  content,
  containsPreviewData,
  mobileNavigationMenuIsOpen,
  updateMobileNavigationMenuIsOpen
}) => {
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
      <HeaderOuterWrapper>
        <HeaderWrapper data-expanded={!!mobileNavigationMenuIsOpen}>
          <ImageAndLinkWrapper>
            <Link to="/">
              <ImageWrapper>
                <img src={headerLogo} alt="gatewayengineering logo" />
              </ImageWrapper>
            </Link>
            <NavigationWrapper data-expanded={!!mobileNavigationMenuIsOpen}>
              {renderNavigationLinks(navigationLinks)}
            </NavigationWrapper>
            <NavigationMenuToggle
              style={{ width: isPreview ? "1em" : "2.25em" }}
              onClick={() =>
                updateMobileNavigationMenuIsOpen(!mobileNavigationMenuIsOpen)
              }
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ display: "block", margin: "0 auto", marginTop: "2px" }}
              />
            </NavigationMenuToggle>
          </ImageAndLinkWrapper>
        </HeaderWrapper>
      </HeaderOuterWrapper>
    </>
  );
};
