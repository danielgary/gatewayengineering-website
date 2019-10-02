import React from "react";
import MainContentLayout from "../../templates/main-content";

const MainContentPreview = ({ entry }) => (
  <MainContentLayout data={entry.get("data").toJS()} />
);

export default MainContentPreview;
