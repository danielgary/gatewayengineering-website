import React from "react";
import HeroSectionLayout from "../../templates/hero-section";

const HeroSectionPreview = ({ entry }) => (
  <HeroSectionLayout data={entry.get("data").toJS()} />
);

export default HeroSectionPreview;