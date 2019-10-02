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
