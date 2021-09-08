//import styled from "styled-components";
import React, { Component } from "react";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    page: 0,
  };

  showPage = (no) => {
    this.setState({ page: no });
  };

  render() {
    return (
      <div>
        <Menubar showPage={this.showPage}></Menubar>
        <Page page={this.state.page} />
      </div>
    );
  }
}

export default App;
