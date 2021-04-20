import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { SearchMovies } from "./views/SearchMovies";
import { BoxOffice } from "./views/BoxOffice";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { MovieDetails } from "./views/MovieDetails";
import { PopularMovies } from "./views/PopularMovies";
import { SimilarMovies } from "./views/SimilarMovies";
import { InternationalMovies } from "./views/InternationalMovies";
import { TrendingMovies } from "./views/TrendingMovies";
import { UpcomingMovies } from "./views/UpcomingMovies";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/moviedetails/:id" component={MovieDetails} />
						<Route exact path="/" component={Home} />
						<Route exact path="/searchmovies" component={SearchMovies} />
						<Route exact path="/boxoffice" component={BoxOffice} />
						<Route exact path="/popularmovies" component={PopularMovies} />
						<Route exact path="/similarmovies" component={SimilarMovies} />
						<Route exact path="/internationalmovies" component={InternationalMovies} />
						<Route exact path="/trendingmovies" component={TrendingMovies} />
						<Route exact path="/upcomingmovies" component={UpcomingMovies} />
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
