import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ServicesPage from "views/ServicesPage/ServicesPage";
import Contr from "views/contractor/Contr";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/Contractors" component={Contr} />
      <Route path="/Services" component={ServicesPage} />
      <Route path="/About" component={ProfilePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
