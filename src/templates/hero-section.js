import React from "react";
import { graphql } from "gatsby";
import StylesheetInjector from "../components/global-themes/stylesheetInjector";
import { GlobalStyle } from "../components/global-themes/global";
import { HeroSectionContainer } from "../components/hero-section/HeroSectionContainer";

export const HeroSectionTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <HeroSectionContainer content={content} />
    </StylesheetInjector>
  );
};

const HeroSectionLayout = ({ data }) => {
  const heroSection = data;

  return <HeroSectionTemplate content={heroSection} />;
};

export default HeroSectionLayout;

export const HeroSectionQuery = graphql`
  query heroSectionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        templateKey
      }
    }
  }
`;
