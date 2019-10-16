import React from "react";
import { graphql } from "gatsby";
import StylesheetInjector from "../components/global-themes/stylesheetInjector";
import { GlobalStyle } from "../components/global-themes/global";
import { FooterContainer } from "../components/footer/FooterContainer";

export const FooterTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <FooterContainer content={content} />
    </StylesheetInjector>
  );
};

const FooterLayout = ({ data }) => {
  const footer = data;

  return <FooterTemplate content={footer} />;
};

export default FooterLayout;

export const FooterQuery = graphql`
  query FooterByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        templateKey
      }
    }
  }
`;
