import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .about_page {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }

  .about {
    display: flex;
    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }

  .text-box {
    padding: 3rem 5rem;
    color: #b9b9b9;

    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      padding: 1.5rem 2.5rem;
    }
  }

  .u-fade-in-element {
    animation: fadeIn 1s forwards;
  }

  .heading-tertiary {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #ff3153;
  }

  .u-margin-bottom-small {
    margin-bottom: 1.5rem !important;
  }

  .paragraph {
    font-size: 1.6rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .about__skills {
    text-transform: uppercase;
    min-width: 40%;
    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      padding: 1.5rem 2.7rem;
    }
  }

  .progress-bar--90 {
    max-width: 90%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  .progress-bar {
    position: relative;
    cursor: pointer;
    padding-left: 1.5rem;
    padding-top: 0.2rem;
    color: #141416;
    margin-bottom: 1.1rem;
    background-image: linear-gradient(to right, #f17a3a, #e84545);
    transition: transform 0.7s ease-out, width 0.7s ease-out;
    opacity: 0.8;
    letter-spacing: 0.4rem;
  }

  /* .progress-bar--90::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "90%";
    animation: max_90 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--80 {
    max-width: 80%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--80::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "80%";
    animation: max_80 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--70 {
    max-width: 70%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--70::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "70%";
    animation: max_70 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--60 {
    max-width: 60%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }
  /* 
  .progress-bar--60::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "60%";
    animation: max_60 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--40 {
    max-width: 40%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--40::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "40%";
    animation: max_40 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <div className="about_page">
          <Header />
          <div tabIndex="-1" role="group" style={{ outline: "none" }}>
            <section className="about">
              <div className="about__overview">
                <div className="text-box dev-details u-fade-in-element">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Profile
                  </h3>
                  <p className="paragraph">
                    <span className="paragraph__block">
                      Hello there!
                      <br />I am a full-stack developer based in Canton, OH,
                      USA.&nbsp;
                    </span>
                    I am a person who is curious and meticulous with a desire to
                    learn. I believe I can bring new perspectives and life
                    experiences to the team. I want to work with big thinkers
                    who want to take on fresh challenges as a team. I realized,
                    I want to do more and started doing projects with end to end
                    technologies. Solving problems for software gives me a sense
                    of accomplishment and satisfaction.
                  </p>
                </div>
                <div>
                  <span>
                    <div className="text-box skill-details">
                      <h3 className="heading-tertiary u-margin-bottom-small">
                        C/C++, C#, Python
                      </h3>
                      <p className="paragraph">
                        Desktop App, Multithreading, Web-Socket programming, BDD
                        (Behave) &amp; unittest
                      </p>
                    </div>
                  </span>
                </div>
              </div>
              <div className="about__skills">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Programming Languages
                </h3>
                <div className="progress-bar progress-bar--90">C#, 90%</div>
                <div className="progress-bar progress-bar--90">C/C++, 90%</div>
                <div className="progress-bar progress-bar--90">Python, 90%</div>
                <div className="progress-bar progress-bar--80">
                  Javascript, 80%
                </div>
                <div className="progress-bar progress-bar--40">GoLang, 40%</div>
                <div className="progress-bar progress-bar--40">Erlang, 40%</div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Frameworks
                </h3>
                <div className="progress-bar progress-bar--90">
                  ASP.NET MVC, 90%
                </div>
                <div className="progress-bar progress-bar--80">
                  ASP.NET Core, 80%
                </div>
                <div className="progress-bar progress-bar--80">Django, 80%</div>
                <div className="progress-bar progress-bar--60">
                  React.js, 60%
                </div>
                <div className="progress-bar progress-bar--60">
                  Angular, 60%
                </div>
                <div className="progress-bar progress-bar--60">Vue.js, 60%</div>
                <div className="progress-bar progress-bar--40">Elixir, 40%</div>
                <div className="progress-bar progress-bar--40">
                  Buffalo, 40%
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Databases
                </h3>
                <div className="progress-bar progress-bar--90">MSSQL, 90%</div>
                <div className="progress-bar progress-bar--80">MySQL, 80%</div>
                <div className="progress-bar progress-bar--80">
                  Neo4J/Cypher, 80%
                </div>
                <div className="progress-bar progress-bar--80">Mongo, 80%</div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default About;
