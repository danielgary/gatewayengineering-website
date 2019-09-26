import React from "react";
import {
  NavigationLink,
  FooterOuterWrapper,
  FooterInnerWrapper,
  ContactAndLinkWrapper,
  ContactWrapper,
  ContactUs,
  ContactEmail,
  ContactPhoneNumber,
  ContactStreetAddress,
  NavigationLinkwWrapper,
  NavigationText,
  FooterLogoAndCopyright,
  Copyright,
  ImageWrapper
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

export const FooterContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;
  const footerLogoImage = isPreview
    ? pageContent.footerLogo
    : pageContent.footerLogo.publicURL;
  const { navigationLinks } = pageContent;

  return (
    <>
      <div style={{ marginTop: "535px" }}></div>
      <FooterOuterWrapper>
        <FooterInnerWrapper>
          <ContactAndLinkWrapper>
            <ContactWrapper>
              <ContactEmail>
                <ContactUs>Contact us</ContactUs>
                <a
                  href={`mailto:${pageContent.contactInformation.emailAddress}`}
                >
                  {pageContent.contactInformation.emailAddress}
                </a>
              </ContactEmail>
              <ContactPhoneNumber>
                {pageContent.contactInformation.phoneNumber}
              </ContactPhoneNumber>
              <ContactStreetAddress>
                {pageContent.contactInformation.streetAddress}
              </ContactStreetAddress>
            </ContactWrapper>
            <NavigationLinkwWrapper>
              <NavigationText>Navigation</NavigationText>
              {renderNavigationLinks(navigationLinks)}
            </NavigationLinkwWrapper>
          </ContactAndLinkWrapper>
          <FooterLogoAndCopyright>
            <ImageWrapper>
              <img src={footerLogoImage} alt="Gateway Engineering logo" />
            </ImageWrapper>
            <Copyright>{pageContent.copyright}</Copyright>
          </FooterLogoAndCopyright>
        </FooterInnerWrapper>
      </FooterOuterWrapper>
    </>
  );
};
