import React from "react";
import Layout from "../components/Layout";
import HeroSectionContainer from "../components/hero-section/HeroSectionContainer";

export const IndexPage = () => (
  <>
    <Layout>
      <div style={{ paddingTop: "150px" }}></div>
      <HeroSectionContainer />
    </Layout>
  </>
);

export default IndexPage;
