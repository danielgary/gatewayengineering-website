import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Footer } from "./Footer";

const FOOTER_QUERY = graphql`
  query FooterQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            footerLogo {
              publicURL
            }
            navigationLinks {
              name
              path
            }
            copyright
            contactInformation {
              emailAddress
              phoneNumber
              streetAddress
            }
          }
        }
      }
    }
  }
`;

export const FooterContainer = ({ content }) => {
  return <Footer content={content} />;
};

export default () => {
  const data = useStaticQuery(FOOTER_QUERY);
  return <FooterContainer content={data} />;
};
