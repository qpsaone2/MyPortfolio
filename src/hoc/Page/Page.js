import React, { Component } from "react";
import Intro from "../../components/Intro/Intro";
import ReactJs from "../../components/ReactJs/Reactjs";
import AWS from "../../components/AWS/AWS";
import Java from "../../components/Java/Java";

class Page extends Component {
  displayPage = (no) => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <ReactJs />;
      case 2:
        return <AWS />;
      case 3:
        return <Java />;
      default:
        return <Intro />;
    }
  };
  render() {
    return <div>{this.displayPage(this.props.page)}</div>;
  }
}

export default Page;
