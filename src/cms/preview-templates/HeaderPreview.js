import React from "react";
import HeaderTemplate from "../../templates/header-component";

const HeaderPreview = ({ entry }) => (
  <HeaderTemplate data={entry.get("data").toJS()} />
);

export default HeaderPreview;
