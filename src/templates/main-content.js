import React from "react";
import { graphql } from "gatsby";
import StylesheetInjector from "../components/global-themes/stylesheetInjector";
import { MainContentContainer } from "../components/main-content/MainContentContainer";

export const MainContentTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <MainContentContainer content={content} />
    </StylesheetInjector>
  );
};

const MainContentLayout = ({ data }) => {
  const mainContent = data;

  return <MainContentTemplate content={mainContent} />;
};

export default MainContentLayout;

export const MainContentQuery = graphql`
  query mainContentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        templateKey
      }
    }
  }
`;
