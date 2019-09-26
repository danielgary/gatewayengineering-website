import React, { Component } from "react";
import { StyleSheetManager } from "styled-components";

// Injects styled components into preview iframe in the CMS
class StylesheetInjector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iframeRef: ""
    };
  }

  componentDidMount() {
    const iframe = document.querySelector("#nc-root iframe");
    const iframeHeadElem = iframe && iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    return (
      <>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            <>{this.props.children}</>
          </StyleSheetManager>
        )}
      </>
    );
  }
}

export default StylesheetInjector;
