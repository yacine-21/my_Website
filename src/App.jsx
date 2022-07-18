import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./view/Porfolio";
import Homepage from "./view/HomePage";
import error_404 from "./view/Error";
import Contact from "./view/Contact";
import Services from "./view/Services";
import Resume from "./view/Resume";
import Tuto from "./view/Tuto";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/portfolio' exact component={Portfolio} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/services' exact component={Services} />
					<Route path='/resume' exact component={Resume} />
					<Route path='/tutos' exact component={Tuto} />
					<Route component={error_404} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
