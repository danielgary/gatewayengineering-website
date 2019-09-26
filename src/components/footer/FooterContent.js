import React from "react";
import { NavigationLink } from "./styled";
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

  console.log("pageContent: ", pageContent);

  return (
    <>
      <div>Hello from the footer component</div>
      <div>
        <div>
          <div>
            <div>
              <div>{pageContent.contactInformation.emailAddress}</div>
              <div>{pageContent.contactInformation.phoneNumber}</div>
              <div>{pageContent.contactInformation.streetAddress}</div>
            </div>
            <div>
              <div>{renderNavigationLinks(navigationLinks)}</div>
            </div>
          </div>
          <div>
            <img src={footerLogoImage} alt="Gateway Engineering logo" />
            <p>{pageContent.copyright}</p>
          </div>
        </div>
      </div>
    </>
  );
};
