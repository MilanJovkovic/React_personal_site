import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import Contact from "./pages/contact";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router forceRefresh={false}>
        <Switch>
          <Route push exact path="/" component={Home} />
          <Route push exact path="/about" component={About} />
          <Route push exact path="/experience" component={Experience} />
          <Route push exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
