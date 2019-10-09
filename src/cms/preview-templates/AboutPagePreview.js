import React from "react";
import AboutLayout from "../../components/about/about-template";

const AboutPreview = ({ entry }) => (
  <AboutLayout data={entry.get("data").toJS()} />
);

export default AboutPreview;
