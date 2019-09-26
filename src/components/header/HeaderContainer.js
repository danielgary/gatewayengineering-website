import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Header } from "./Header";

const NAVIGATION_ITEMS_QUERY = graphql`
  query HeaderQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "header-component" } } }
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

export const HeaderContainer = () => {
  //   let [navigationMenuIsOpen, updateNavigationMenuIsOpen] = useState(false);
  return <Header />;
};

export default () => {
  const data = useStaticQuery(NAVIGATION_ITEMS_QUERY);
  return <HeaderContainer data={data} />;
};
