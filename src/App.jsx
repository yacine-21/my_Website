import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioView from "./view/Porfolio";
import Homepage from "./view/HomePage";
import error_404 from "./view/Error";
import ContactView from "./view/Contact";
import ServiceView from "./view/Services";
import ResumeView from "./view/Resume";
import Tuto from "./view/Tuto";
import PuzzleView from "./view/Puzzle";
import SecretPathView from "./view/SecretPathView"
import PortfolioClassical from "./view/PortfolioClassical";
import PortfolioGaming from "./view/PortfolioGaming";
import PortfolioHacking from "./view/PortfolioHacking";



const App = () => {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/portfolio' exact component={PortfolioView} />
					<Route path='/contact' exact component={ContactView} />
					<Route path='/services' exact component={ServiceView} />
					<Route path='/resume' exact component={ResumeView} />
					<Route path='/tutos' exact component={Tuto} />
					<Route path='/puzzle' exact component={PuzzleView} />
					<Route path='/portfolioClassical' exact component={PortfolioClassical} />
					<Route path='/portfolioHacking' exact component={PortfolioHacking} />
					<Route path='/portfolioGaming' exact component={PortfolioGaming} />
					<Route path='/GAMEFANTASYINTUITIONEMPERORDETECTION' exact component={SecretPathView} />
					<Route component={error_404} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
