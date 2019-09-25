import React from "react";
import ServicesPageLayout from "../../components/services/services-page-template";

const ServicesPagePreview = ({ entry }) => (
  <ServicesPageLayout data={entry.get("data").toJS()} />
);

export default ServicesPagePreview;
