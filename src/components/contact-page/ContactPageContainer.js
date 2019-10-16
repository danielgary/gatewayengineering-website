import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ContactPage } from "./ContactPage";

const CONTACT_PAGE_QUERY = graphql`
  query ContactPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "contact-page" } } }
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

export const ContactPageContainer = ({ content }) => {
  return <ContactPage content={content} />;
};

export default () => {
  const data = useStaticQuery(CONTACT_PAGE_QUERY);
  return <ContactPageContainer content={data} />;
};