import React from "react";
// import { Link } from "gatsby";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import {} from "./styled";
import { HeaderContent } from "./HeaderContent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = ({ content }) => {
  const siteData = content.allMarkdownRemark;
  console.log("Content: ", content);
  return (
    <>
      <HeaderContent
        content={content}
        containsPreviewData={!siteData ? true : false}
      />
    </>
  );
};
