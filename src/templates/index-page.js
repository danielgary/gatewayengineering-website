import React from "react";
import Layout from "../components/Layout";
import HeroSectionContainer from "../components/hero-section/HeroSectionContainer";
import MainContentContainer from "../components/main-content/MainContentContainer";

export const IndexPage = () => (
  <>
    <Layout>
      <div
        style={{
          paddingTop: "12.2vh"
        }}
      ></div>
      <HeroSectionContainer />
      <MainContentContainer />
    </Layout>
  </>
);

export default IndexPage;
