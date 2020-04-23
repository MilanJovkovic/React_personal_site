import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import NavButton from "../common/NavButton";

const Wrapper = styled.div`
  .navButtons {
    display: flex;
    justify-content: space-between;
    font-size: 1.7rem;
  }
`;

class NavBar extends Component {
  navAbout = () => {
    const { history } = this.props;
    console.log("about");
    history.push("/about");
  };

  navExperience = () => {
    const { history } = this.props;
    console.log("experience");
    history.push("/experience");
  };

  navContact = () => {
    const { history } = this.props;
    console.log("contact");
    history.push("/contact");
  };

  render() {
    return (
      <Wrapper>
        <div className="navButtons">
          <NavButton onClick={this.navAbout}>About</NavButton>
          <NavButton onClick={this.navExperience}>Experience</NavButton>
          <NavButton onClick={this.navContact}>Contact</NavButton>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(NavBar);
