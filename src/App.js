import styled from "styled-components";
import React, { Component } from "react";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ), */
  background-image: url(https://cdn.pixabay.com/photo/2014/08/09/15/45/sky-414199_960_720.jpg);
  background-size: cover;
  background-image: src= "";
`;

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
        <Container />
        <Menubar showPage={this.showPage}></Menubar>
        <Page page={this.state.page} />
      </div>
    );
  }
}

export default App;
