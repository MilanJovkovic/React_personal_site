import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

const Wrapper = styled.div`
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 20px;
  }

  .heading-primary {
    color: #e84545;
    text-transform: uppercase;
    backface-visibility: hidden;
    border-bottom: 2px solid #e84545;
    padding: 2rem;
  }
  .heading-primary--main {
    display: block;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
    animation: fadeIn 1.4s ease-out forwards, moveInLeft 1.4s ease-out;
    background: linear-gradient(to bottom, rgba(232, 69, 69, 0.8), #f17a3a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .heading-primary--sub {
    display: block;
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    animation: moveInRight 1.2s ease-out 0.5s;
    animation-fill-mode: backwards;
  }
  .navButtons {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="header header--centered">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Olga Belavina</span>
            <span className="heading-primary--sub">Software Developer</span>
          </h1>
          <NavBar />
        </div>
      </Wrapper>
    );
  }
}

export default Header;
