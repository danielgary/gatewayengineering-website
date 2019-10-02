import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { HeroSection } from "./HeroSection";

const HERO_SECTION_QUERY = graphql`
  query HeroSectionQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "hero-section" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
          }
        }
      }
    }
  }
`;

export const HeroSectionContainer = ({ content }) => {
  return <HeroSection content={content} />;
};

export default () => {
  const data = useStaticQuery(HERO_SECTION_QUERY);
  return <HeroSectionContainer content={data} />;
};