import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ServicesPage } from "./ServicesPage";

const SERVICES_PAGE_QUERY = graphql`
  query ServicesPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "services" } } }
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

export const ServicesPageContainer = ({ content }) => {
  return <ServicesPage content={content} />;
};

export default () => {
  const data = useStaticQuery(SERVICES_PAGE_QUERY);
  return <ServicesPageContainer content={data} />;
};
