import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .contact_page {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact__email {
    width: 60%;
    padding: 3rem 5rem;
    animation: fadeIn 1s;
    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      width: 80%;
    }
    @media only screen and (max-width: 37.5em) {
      width: 100%;
    }
  }

  .form__group:not(:last-child) {
    margin-bottom: 2rem;
  }

  .form__input {
    position: relative;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e84545;
    width: 100%;
    display: block;
    transition: all 0.3s;
  }

  .form__input::after {
    position: absolute;
    content: "";
    top: 0;
    left: -1rem;
    height: 100%;
    width: 10%;
    background-color: orangered;
  }

  ::selection {
    background-color: #f7f7f7;
    color: #1a1a1d;
  }

  button,
  input {
    overflow: visible;
  }

  input:required {
    box-shadow: none;
  }

  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  .form__label {
    font-size: 1.2rem;
    font-weight: 300;
    color: #999;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  label {
    cursor: default;
  }

  .form__input--textarea {
    resize: vertical;
    overflow: hidden;
    box-shadow: none;
  }

  .btn,
  .btn:link,
  .btn:visited {
    background-color: transparent;
    padding: 1rem 3rem;
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.6rem;
    color: #ff3153;
    font-weight: 200;
    letter-spacing: 0.2rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s ease-out;
  }

  .btn:active,
  .btn:focus {
    outline: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  .btn:hover:enabled {
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.2);
    color: #e84545;
  }
  .btn:hover:enabled::before {
    height: 80%;
    border-top: none;
    border-bottom: none;
    border-left: 0.2rem solid #e84545;
  }
  .btn:hover:enabled::after {
    transform: scale(1);
    background: none;
    opacity: 1;
    border: 1px solid #e84545;
    animation: removeBorder 1s forwards;
  }
  .btn:disabled {
    color: rgba(255, 49, 83, 0.6);
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    transition: all 0.2s ease-out;
    border-left: 0.5rem solid #ff3153;
  }

  .btn::after {
    content: "";
    opacity: 0;
    background-color: #e84545;
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.2s ease-out;
  }

  .contact__social {
    flex-grow: 1;
    padding: 3rem 5rem;
    display: flex;
    animation: fadeIn 1s 0.5s;
    animation-fill-mode: backwards;
  }

  .btn-group {
    cursor: pointer;
  }

  a {
    color: #e84545;
  }

  a {
    background-color: transparent;
  }

  .btn-group:nth-child(odd) .btn-group__icon-box {
    transform: skew(-15deg) rotate(-15deg);
  }
  .btn-group:nth-child(even) .btn-group__icon-box {
    transform: skew(15deg) rotate(15deg);
  }
  .btn-group__icon-box {
    border: 1px solid transparent;
    padding: 2rem;
  }

  .btn-group__icon-box > svg {
    height: 4.5rem;
    width: 4.5rem;
    fill: rgba(232, 69, 69, 0.7);
  }

  .btn-group__icon-box:hover {
    box-shadow: 0 0.6rem 1rem rgba(0, 0, 0, 0.2);
  }

  .btn-group__icon-box:hover:after {
    transform: scale(1);
    background: none;
    opacity: 1;
    border: 1px solid #e84545;
    animation: removeBorder 1s forwards;
  }

  .btn-group__icon-box:after {
    content: "";
    opacity: 0;
    background-color: #e84545;
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.2s ease-out;
  }
`;

class Contact extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "patrickay89@gmail.com",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_VjpSlN4a",
      templateParams,
      "user_lYQGdZY6px0tBSy6YReNS"
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <div className="contact_page">
          <Header />
          <div tabIndex="-1" role="group" style={{ outline: "none" }}>
            <section className="contact">
              <div className="contact__email">
                <form onSubmit={this.handleSubmit.bind(this)} className="form">
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      name="subject"
                      placeholder="Your Email"
                      id="subject"
                      required=""
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                    <label htmlFor="yourmail" className="form__label">
                      Your Email
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="subject"
                      placeholder="Email Subject"
                      id="subject"
                      required=""
                      value={this.state.subject}
                      onChange={this.handleChange.bind(this, "subject")}
                    />
                    <label htmlFor="subject" className="form__label">
                      Email Subject
                    </label>
                  </div>

                  <div className="form__group">
                    <textarea
                      className="form__input form__input--textarea"
                      name="body"
                      placeholder="Email Body"
                      id="body"
                      required=""
                      spellCheck="false"
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, "message")}
                    ></textarea>
                    <label htmlFor="body" className="form__label">
                      Email Body
                    </label>
                  </div>
                  <div className="form__group">
                    <button className="btn ">contact</button>
                  </div>
                </form>
              </div>
              <div className="contact__social">
                <a
                  href="https://www.linkedin.com/in/patric-kay/"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-linkedin" viewBox="0 0 24 28">
                      <title>linkedin</title>
                      <path d="M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://github.com/godstar88"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-github" viewBox="0 0 24 28">
                      <title>github</title>
                      <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://gmail.com"
                  className="btn-group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="btn-group__icon-box">
                    <svg id="icon-goodreads" viewBox="0 0 32 32">
                      <title>goodreads</title>
                      <path d="M26.033 21.303v-20.649h-2.745v3.875h-0.085c-0.281-0.607-0.641-1.188-1.123-1.743-0.48-0.549-1.023-1.036-1.643-1.459-0.621-0.419-1.283-0.748-2.025-0.981-0.737-0.225-1.52-0.345-2.361-0.345-1.613 0-3.067 0.3-4.328 0.893-1.263 0.596-2.324 1.409-3.18 2.44s-1.511 2.235-1.96 3.615c-0.448 1.383-0.675 2.839-0.675 4.377 0 1.599 0.188 3.101 0.567 4.509 0.381 1.409 0.983 2.635 1.824 3.683 0.841 1.040 1.883 1.863 3.167 2.444 1.281 0.581 2.825 0.881 4.628 0.881 1.664 0 3.107-0.42 4.349-1.261s2.184-1.964 2.825-3.367h0.081v3.045c0 2.725-0.561 4.809-1.685 6.273-1.12 1.441-2.965 2.184-5.528 2.184-0.763 0-1.504-0.081-2.225-0.241-0.723-0.16-1.381-0.42-1.983-0.76-0.583-0.361-1.103-0.801-1.524-1.384-0.421-0.58-0.701-1.281-0.843-2.124h-2.809c0.089 1.183 0.42 2.205 0.983 3.067 0.565 0.861 1.281 1.563 2.136 2.124 0.855 0.541 1.823 0.941 2.896 1.203 1.081 0.259 2.185 0.4 3.325 0.4 1.844 0 3.388-0.26 4.648-0.74 1.263-0.501 2.285-1.203 3.068-2.144 0.801-0.944 1.361-2.065 1.724-3.408 0.36-1.343 0.56-2.845 0.56-4.489l-0.059 0.083zM16.055 20.56c-1.273 0-2.379-0.252-3.305-0.761-0.929-0.507-1.703-1.176-2.309-2.004-0.623-0.828-1.063-1.776-1.363-2.852s-0.443-2.177-0.443-3.312c0-1.161 0.14-2.3 0.401-3.417 0.28-1.12 0.72-2.116 1.323-2.987 0.601-0.869 1.383-1.576 2.304-2.112s2.044-0.807 3.347-0.807 2.404 0.279 3.327 0.828c0.901 0.553 1.663 1.279 2.244 2.179 0.581 0.903 1.001 1.905 1.263 3.007 0.26 1.101 0.38 2.208 0.38 3.309 0 1.136-0.16 2.237-0.46 3.312-0.301 1.076-0.763 2.024-1.384 2.852-0.62 0.828-1.361 1.497-2.264 2.004-0.901 0.509-1.944 0.761-3.145 0.761h0.085z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Contact;
