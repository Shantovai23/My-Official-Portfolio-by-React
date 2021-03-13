import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Activities from "./pages/Activities";
import Home from "./pages/Home";
import Objective from "./pages/Objective";
import Qualification from "./pages/Qualification";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/objective" component={Objective} />
          <Route path="/activities" component={Activities} />
          <Route path="/qualifications" component={Qualification} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
