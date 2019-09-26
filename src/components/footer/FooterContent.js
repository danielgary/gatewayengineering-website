import React from "react";
import {} from "./styled";

let isPreview;

// const renderLinks = links => {
//   return links.map((link, index) => {
//     return (
//       <LinkList key={index}>
//         <LinkItems href={link.linkPath}>{link.linkName}</LinkItems>
//       </LinkList>
//     );
//   });
// };

// const renderSocialMediaLinks = socialMediaLinks => {
//   return socialMediaLinks.map((link, index) => {
//     const imagePath = isPreview
//       ? link.socialMediaImage
//       : link.socialMediaImage.publicURL;
//     return (
//       <div key={index}>
//         <div>
//           <a href={link.socialMediaPath}>
//             <img src={imagePath} />
//           </a>
//         </div>
//       </div>
//     );
//   });
// };

export const FooterContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <>
      <div>Hello from the footer component</div>
    </>
  );
};
