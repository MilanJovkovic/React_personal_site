import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import experience from "./pages/experience";
import contact from "./pages/contact";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route push exact path="/" component={home} />
          <Route push exact path="/about" component={about} />
          <Route push exact path="/experience" component={experience} />
          <Route push exact path="/contact" component={contact} />
        </Switch>
      </Router>
    </div>
  );
}
