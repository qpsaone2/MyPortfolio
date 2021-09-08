import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const ButtonStyle = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 10%;
  transition: all 0.3s;
  position: relative;
  color: ${(props) => props.color};
  cursor: pointer;
  border: 3px solid ${(props) => props.color};
  &:hover {
    transform: scale(1.1);
  }
  span {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

class MenuButton extends React.Component {
  render() {
    return (
      <ButtonStyle
        onMouseOver={() => this.props.showPage(this.props.index)}
        color={this.props.color}
      >
        <Icon
          name={this.props.icon}
          style={{ fontSize: "40px", transform: "translateY(30%)" }}
        ></Icon>
        <span>{this.props.text}</span>
      </ButtonStyle>
    );
  }
}

export default MenuButton;
