import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .experience_page {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }
  .title-center {
    width: 98%;
    text-align: left;
    margin: 0 auto;
    font-size: 25px;
    font-weight: bold;
    padding-top: 15px;
    border-bottom: 1px solid #00000069;
  }
  .experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }

  .timeline {
    width: 100%;
    height: 10rem;
    position: relative;
    display: block;
  }

  .timeline__breakpoint {
    opacity: 0;
    animation: fadeIn 0.8s 0.8s forwards;
    position: absolute;
    top: -5.2rem;
    display: block;
    height: 12rem;
    width: 1px;
    transform: none;
    z-index: 1;
    transform-origin: right;
    cursor: pointer;
  }

  .timeline__breakpoint::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2px;
    height: 70%;
    border-left: solid 2px rgba(255, 49, 83, 0.5);
    z-index: -10;
  }

  .timeline__breakpoint::after {
    content: "";
    position: absolute;
    top: 3.5rem;
    width: 100%;
    height: 2.5rem;
    transition: opacity 0.7s;
    display: block;
    opacity: 0;
  }

  .timeline__breakpoint:hover::after,
  .timeline__breakpoint--selected::after {
    opacity: 1;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(232, 69, 69, 0.1) 5px,
      rgba(232, 69, 69, 0.1) 10px
    );
  }

  .timeline__bp-header {
    text-align: center;
    font-weight: 200;
    letter-spacing: 0.3rem;
  }

  .timeline__bp-header--main {
    display: block;
    font-size: 1.7rem;
    color: #b9b9b9;

    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      font-size: 1.2rem;
    }
  }

  .timeline__bp-header--sub {
    font-size: 1.1rem;
    color: #999;

    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      font-size: 1rem;
    }
  }

  .timeline__ribbon {
    animation: expandWidth 2s;
    position: absolute;
    width: 100%;
    background-image: linear-gradient(to right, transparent, #e84545 20%);
    height: 1rem;
  }

  .timeline__dateline {
    animation: fadeIn 2.2s;
    position: absolute;
    top: 4.5rem;
    width: 100%;
    background-color: #777;
    height: 2px;
  }

  .timeline__date-mark {
    position: absolute;
  }

  .timeline__date-mark::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2rem;
    border-left: 2px solid #777;
  }

  .timeline__date-mark > span {
    display: inline-block;
    margin: 0.5rem 1rem;
    letter-spacing: 0.2rem;
  }

  .experience__description {
    display: flex;
    width: 100%;
    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }

  .u-fade-in-element {
    animation: fadeIn 1s forwards;
  }
  .text-box {
    padding: 3rem 5rem;
    color: #b9b9b9;
    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      padding: 1.5rem 2.5rem;
    }
  }

  .experience__role {
    width: 50%;
    @media only screen and (max-width: 37.5em) {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .u-margin-bottom-small {
    margin-bottom: 1.5rem !important;
  }

  .heading-tertiary {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #ff3153;
  }

  .heading-tertiary--sub {
    display: block;
    font-size: 1.2rem;
    text-transform: none;
    font-style: italic;
    font-weight: 200;
    color: #b9b9b9;
    margin-left: 1.5rem;
  }

  .paragraph {
    font-size: 1.6rem;
  }

  .paragraph:not(:last-child) {
    margin-bottom: 3rem;
  }

  a {
    color: #e84545;
  }

  .list {
    font-size: 1.6rem;
    list-style: none;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .list li {
    padding-left: 1rem;
    text-indent: -0.7rem;
  }

  .list li::before {
    content: "- ";
    color: #ff3153;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
`;

class Experience extends Component {
  render() {
    return (
      <Wrapper>
        <div className="experience_page">
          <Header />
          <div tabIndex="-1" role="group" style={{ outline: "none" }}>
            <section className="experience">
              <div className="timeline">
                <div className="timeline__breakpoint-group">
                  <div
                    className="timeline__breakpoint timeline__breakpoint "
                    style={{ left: "6.54947%", width: "52.0856%" }}
                  >
                    <h3 className="timeline__bp-header timeline__bp-header">
                      <span className="timeline__bp-header--main">
                        Sr. Software Engineer
                      </span>
                      <span className="timeline__bp-header--sub">
                        Chepri / Full-time
                      </span>
                    </h3>
                  </div>
                  <div
                    //                  className="timeline__breakpoint timeline__breakpoint timeline__breakpoint--selected"
                    className="timeline__breakpoint timeline__breakpoint"
                    style={{ left: "58.635%", width: "36.365%" }}
                  >
                    <h3 className="timeline__bp-header timeline__bp-header">
                      <span className="timeline__bp-header--main">
                        Sr. Web Engineer
                      </span>
                      <span className="timeline__bp-header--sub">
                        SmartSites / Contract
                      </span>
                    </h3>
                  </div>
                  <div
                    className="timeline__breakpoint timeline__breakpoint"
                    style={{ left: "95%", width: "5%" }}
                  ></div>
                </div>
                <div className="timeline__ribbon"></div>
                <div className="timeline__dateline">
                  <div
                    className="timeline__date-mark"
                    style={{ left: "93.1846%" }}
                  >
                    <span className="timeline__year-mark">2020</span>
                  </div>
                  <div
                    className="timeline__date-mark"
                    style={{ left: "67.2003%" }}
                  >
                    <span className="timeline__year-mark">2019</span>
                  </div>
                  <div
                    className="timeline__date-mark"
                    style={{ left: "41.216%" }}
                  >
                    <span className="timeline__year-mark">2018</span>
                  </div>
                </div>
              </div>
              <div className="experience__description u-fade-in-element">
                <div className="text-box experience__role">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    FULL-TIME FREELANCER
                    <span className="heading-tertiary--sub">
                      Feb 2020 — Present
                    </span>
                  </h3>
                  <p className="paragraph">
                    Looking for a long-term and short-term job opportunites. I
                    prefer remote jobs because I left my previous job to change
                    my life. Based on the rich experience during 8 years, I will
                    deliver your promising desktop/web app and website.
                  </p>
                  <ul className="list">
                    <li>
                      Received a Bachelor's degree in computer science. I have
                      been working in IT area for about 8 years so far. My most
                      familiar areas are Fintech and desktop app development.
                    </li>
                    <li>
                      My preferred programming languages are C/C++, C#, and
                      Python. I am a kind of fast-learners. I learnt Erlang and
                      Golang shortly and had hands-on experience with them as
                      well.
                    </li>
                    <li>
                      Deeply dedicated to mastering my craft, I always strive to
                      build exceptional experiences with modern tools and
                      technologies. When not writing code, I really enjoy
                      learning new stuff, reading books and sketching random
                      things.
                    </li>
                  </ul>
                </div>
                <div className="text-box experience__stack">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Software Stack
                  </h3>
                  <ul className="list">
                    <li>ASP.NET</li>
                    <li>Django</li>
                    <li>ReactJS/Redux</li>
                    <li>Python3</li>
                    <li>Docker</li>
                    <li>MSSQL</li>
                    <li>MongoDB</li>
                    <li>Neo4J</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Experience;
