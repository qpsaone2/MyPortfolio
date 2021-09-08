import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { FlexBox } from "../resusuable/styles";
import img1 from "../../img/myimage.png";

const InstroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  width: 620px;
  height: 420px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);

  .me {
    width: 100%;
    height: 270px;
  }
  .job {
    color: #aaa;
    font-size: 18px;
    letter-spacing: 0.9px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 90%;
  }
  .label {
    font-weight: bold;
    text-align: right;
  }
`;

const IconsBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 70px;
  background-color: #555;
  width: 100%;
  padding: 20px 0;
  .myicon {
    cursor: pointer;
    transition: 0.5s;
  }
  .github:hover {
    color: #302f2f !important;
  }
  .facebook:hover {
    color: #3d548e !important;
  }
  .instagram:hover {
    color: #af30b4 !important;
  }
  .youtube:hover {
    color: #ff0000 !important;
  }
  .google:hover {
    color: #f3b604 !important;
  }
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <InstroContainer>
          <br />
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img src={img1} className="me" />
            </div>
            <div className="flex-6" style={{ padding: "30px" }}>
              <div className="job">Cloud Engineer</div>
              <div className="name">Lee Sang Cheol </div>
              <br />
              <FlexBox>
                <div className="flex-2 label">Language</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">React,HTML,CSS</div>
              </FlexBox>
              <br />
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Github</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">https://github.com/qpsaone2</div>
              </FlexBox>
              <br />
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Email</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">cloudlsc0406@gmail.com</div>
              </FlexBox>
              <br />
            </div>
          </FlexBox>
          <IconsBox>
            <FlexBox>
              <div className="flex-1" />
              <div className="flex-1">
                <a href="https://github.com/qpsaone2">
                  <Icon
                    className="myicon github"
                    name="github"
                    size="big"
                    style={{ color: "white" }}
                  ></Icon>
                </a>
              </div>
              <div className="flex-1">
                <a href="https://www.facebook.com/">
                  <Icon
                    className="myicon facebook"
                    name="facebook"
                    size="big"
                    style={{ color: "white" }}
                  ></Icon>
                </a>
              </div>
              <div className="flex-1">
                <a href="https://www.instagram.com/terzmy_/">
                  <Icon
                    className="myicon instagram"
                    name="instagram"
                    size="big"
                    style={{ color: "white" }}
                  ></Icon>
                </a>
              </div>
              <div className="flex-1">
                <a href="https://www.google.com/">
                  <Icon
                    className="myicon google"
                    name="google plus"
                    size="big"
                    style={{ color: "white" }}
                  ></Icon>
                </a>
              </div>
              <div className="flex-1">
                <a href="https://www.youtube.com/">
                  <Icon
                    className="myicon youtube"
                    name="youtube"
                    size="big"
                    style={{ color: "white" }}
                  ></Icon>
                </a>
              </div>
              <div className="flex-1" />
            </FlexBox>
          </IconsBox>
        </InstroContainer>
      </div>
    );
  }
}

export default Intro;
