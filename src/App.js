import React, { Fragment } from "react";
import "./App.css";
import EstimatedCost from "./components/EstimatedCost";
import HomeTypes from "./components/HomeTypes";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const public_url = process.env.PUBLIC_URL;

function App() {
  return (
    <Fragment>
      <div className="app col-12">
        <Nav />
        <div className="homeq container-fluid col-xl-8 col-md-10 col-sm-12">
          <div className="homeq__container mx-auto">
            <Router>
              <Switch>
                <Route path="/estimate">
                  <EstimatedCost />
                </Route>
                <Route path="/">
                  <HomeTypes />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
        <img
          className="back__design"
          alt=""
          src={public_url + "./Resources/icons/Group 36@2x.png"}
        />
      </div>
    </Fragment>
  );
}

export default App;
