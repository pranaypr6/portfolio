import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import SocialMedia from "./components/SocialMedia";
import "./App.css";
import Projects from "./components/Projects";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <Router>
        <div className="app"></div>
        <div className="main">
          <div className="content">
            <Switch>
              <Route exact path="/" component={FirstPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/education" component={Education} />
            </Switch>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
