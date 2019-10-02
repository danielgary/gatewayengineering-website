import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MainContent } from "./MainContent";

const MAIN_CONTENT_QUERY = graphql`
  query MainContentQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "main-content" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            headerText
            subText
            mainImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            servicesOverview {
              serviceTitle
              serviceDescription
            }
          }
        }
      }
    }
  }
`;

export const MainContentContainer = ({ content }) => {
  return <MainContent content={content} />;
};

export default () => {
  const data = useStaticQuery(MAIN_CONTENT_QUERY);
  return <MainContentContainer content={data} />;
};
