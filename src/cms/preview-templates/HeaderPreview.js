import React from "react";
import HeaderTemplate from "../../templates/header";

const HeaderPreview = ({ entry }) => (
  <HeaderTemplate data={entry.get("data").toJS()} />
);

export default HeaderPreview;
