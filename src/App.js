import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./view/Accueil";
import Homepage from "./view/HomePage";
import error_404 from "./view/Error";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/accueil" exact component={Accueil} />
          <Route component={error_404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
