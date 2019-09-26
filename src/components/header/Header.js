import React from "react";
import {} from "./styled";
import { HeaderContent } from "./HeaderContent";

export const Header = ({
  content,
  mobileNavigationMenuIsOpen,
  updateMobileNavigationMenuIsOpen
}) => {
  const siteData = content.allMarkdownRemark;
  return (
    <>
      <HeaderContent
        content={content}
        containsPreviewData={!siteData ? true : false}
        mobileNavigationMenuIsOpen={mobileNavigationMenuIsOpen}
        updateMobileNavigationMenuIsOpen={updateMobileNavigationMenuIsOpen}
      />
    </>
  );
};
