import React, { Fragment } from "react";

import CandidateView from "./components/candidate-view";

// import styles from "./App.scss";
import "./App.css";

const App = () => (
  <Fragment>
    <nav className="Navigation"/>
    <header className="Header">
      LOGO HERE
    </header>
    <div className="Container">
      <CandidateView/>
    </div>
  </Fragment>
);

export default App;