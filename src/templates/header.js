import React from "react";
import StylesheetInjector from "../components/global-themes/stylesheetInjector";
import { GlobalStyle } from "../components/global-themes/global";
import { HeaderContainer } from "../components/header/HeaderContainer";

export const HeaderTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <GlobalStyle />
      <HeaderContainer content={content} />
    </StylesheetInjector>
  );
};

const HeaderLayout = ({ data }) => {
  const headerData = data;

  return <HeaderTemplate content={headerData} />;
};

export default HeaderLayout;
