import React from "react";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <></>;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
