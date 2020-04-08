import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuLink from "./components/router/MenuLink";
import ManagerUsers from "./components/ManagerUsers/ManagerUsers";
import About from "./components/About";

export default function CustomLinkExample() {
  return (
    <Router>
      <div className="menu">
        <MenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <MenuLink to="/about" label="About" />
      </div>

      <Switch>
        <Route path="/about" children={<About />} />
        <Route path="/" children={<ManagerUsers />} />
      </Switch>
    </Router>
  );
}
