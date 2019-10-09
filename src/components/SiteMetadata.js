import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import favicon from "../../static/img/gateway-engineering-mark.png";

const SEO = ({ title, description, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, siteUrl }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`
      };
      return (
        <>
          <Helmet
            title={seo.title}
            link={[
              { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
            ]}
          >
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            <html lang="en" dir="ltr" />
          </Helmet>
        </>
      );
    }}
  />
);
export default SEO;
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;
