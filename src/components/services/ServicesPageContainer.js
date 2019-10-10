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
            servicesHeader
            salesPitch
            servicesList {
              serviceDescription
              serviceName
              serviceImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
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
