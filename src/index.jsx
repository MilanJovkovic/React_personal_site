import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import bkvideo from "./assets/bg_video.mp4";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-video">
      <video autoPlay className="bg-video__content">
        <source src={bkvideo} type="video/mp4" />
      </video>
      <div className="bg-video__overlay"></div>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
