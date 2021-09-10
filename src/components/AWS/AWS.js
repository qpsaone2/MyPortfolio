import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { FlexBox } from "../resusuable/styles";
import img1 from "../../img/myimage.png";

const InstroContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  margin-bottom: 200px;
  margin-top: 200px;
  margin-left: 600px;
  width: 620px;
  height: 420px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

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

class AWS extends Component {
  render() {
    return (
      <div>
        <InstroContainer>
          <br />
          <FlexBox>
            <div className="flex-4" style={{ padding: "25px" }}>
              <img src={img1} className="me" alt="profile" />
            </div>
            <div className="flex-6" style={{ padding: "30px" }}>
              <div className="job">Cloud Engineer</div>
              <div className="name">Lee Sang Cheol </div>
              <br />
              <FlexBox>
                <div className="flex-2 label">AWS</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">AWS Cloud Engineer</div>
              </FlexBox>
              <br />
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">Cloud</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">
                  DevOps이해, CI/CD,빌드,테스트: 인프라, 플랫폼. 데브옵스 환경,
                  데브옵스 구축, 프로젝트 빌 드관리/ 애플리케이션을 도커 이미졸
                  생성
                </div>
              </FlexBox>
              <br />
              <FlexBox style={{ marginTop: "7px" }}>
                <div className="flex-2 label">github</div>
                <div className="flex-1">&nbsp;</div>
                <div className="flex-6">https://github.com/qpsaone2</div>
              </FlexBox>
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

export default AWS;
