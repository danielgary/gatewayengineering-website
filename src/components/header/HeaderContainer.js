import React from "react";
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
  //   let [navigationMenuIsOpen, updateNavigationMenuIsOpen] = useState(false);
  return <Header content={content} />;
};

export default () => {
  const data = useStaticQuery(HEADER_QUERY);
  return <HeaderContainer content={data} />;
};
