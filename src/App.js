import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from "./view/Accueil";
import Homepage from "./view/HomePage";
import error_404 from "./view/Error";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/accueil" exact component={Accueil} />
        <Route path="*" exact component={error_404} />
      </Router>
    </div>
  );
};

export default App;
