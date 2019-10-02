import React from "react";
import { HeroBackground, TextInnerWrapper, HeroH1, HeroH3 } from "./styled";

let isPreview;

export const HeroSectionContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      <HeroBackground>
        <TextInnerWrapper>
          <HeroH1>{pageContent.headerText}</HeroH1>
          <HeroH3>{pageContent.subText}</HeroH3>
        </TextInnerWrapper>
      </HeroBackground>
    </>
  );
};
