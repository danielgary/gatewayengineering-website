import React from "react";
import FooterLayout from "../../templates/footer";

const FooterPreview = ({ entry }) => (
  <FooterLayout data={entry.get("data").toJS()} />
);

export default FooterPreview;
