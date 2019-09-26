import React from "react";
import StylesheetInjector from "../components/global-themes/stylesheetInjector";
import { HeaderContainer } from "../components/header/HeaderContainer";

export const HeaderTemplate = ({ content }) => {
  // StylesheetInjector injects the styled components into the iframe in the CMS preview pages.
  return (
    <StylesheetInjector>
      <HeaderContainer content={content} />
    </StylesheetInjector>
  );
};

const HeaderLayout = ({ data }) => {
  const headerData = data;

  return <HeaderTemplate content={headerData} />;
};

export default HeaderLayout;
