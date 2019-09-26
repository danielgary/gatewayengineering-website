import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Header } from "./Header";

const HEADER_QUERY = graphql`
  query HeaderQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "header" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            headerLogo {
              publicURL
            }
            navigationLinks {
              name
              path
            }
          }
        }
      }
    }
  }
`;

export const HeaderContainer = ({ content }) => {
  let [mobileNavigationMenuIsOpen, updateMobileNavigationMenuIsOpen] = useState(
    false
  );
  return (
    <Header
      content={content}
      mobileNavigationMenuIsOpen={mobileNavigationMenuIsOpen}
      updateMobileNavigationMenuIsOpen={updateMobileNavigationMenuIsOpen}
    />
  );
};

export default () => {
  const data = useStaticQuery(HEADER_QUERY);
  return <HeaderContainer content={data} />;
};
